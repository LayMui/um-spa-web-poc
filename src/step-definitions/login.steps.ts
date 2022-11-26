import { ConfirmWith } from './../tasks/ConfirmWith';
import { EnterCredentials } from './../tasks/EnterCredentials';
import 'expect-webdriverio'
import { DataTable, Given, Then, When } from '@cucumber/cucumber'
import { Actor } from '@serenity-js/core'
import { Navigate  } from '@serenity-js/web'
import { Login } from '../tasks/Login';
import {setTimeout} from 'timers/promises';
import twilioAPI from '../support/twilioAPI';

if (!process.env.CIRCLECI) {
  require('dotenv').config()
}

Given(
  '{actor} is at the SPA login',
  async (actor: Actor) =>
    await actor.attemptsTo(
      Navigate.to(process.env.BASE_URL),
      Login.toSPA())
)

When(
  '{pronoun} select a country code and a valid mobile number',
  async (actor: Actor, table: DataTable) => {
  const mobileNumber = table.hashes()[0].mobileNumber;
  const countryFlagName = table.hashes()[0].countryFlagName;
  const OTPCode = await twilioAPI.readOTP(countryFlagName.split(' ')[1] + mobileNumber)
    await actor.attemptsTo(
      EnterCredentials.withCountryCodeAndMobileNumber(countryFlagName.split(/(\d) /).pop(), mobileNumber),
     // ConfirmWith.OTP(OTPCode),
      )
  
  })

Then('{pronoun} is able to perform OTP',
  async (actor: Actor) => {
  await actor.attemptsTo(
  )
  })
