
import { Duration, Task, Wait } from '@serenity-js/core'
import { Click, Enter, isVisible } from '@serenity-js/web'

import { ListWhichText } from '../page-objects/ListWhichText'
import { LoginPage } from '../page-objects/LoginPage'

    
export const EnterCredentials = {
  withCountryCodeAndMobileNumber: (countryName: string, mobileNumber) =>
    Task.where(
      `#actor select country ${countryName}`,
       Wait.upTo(Duration.ofMilliseconds(5000000)).until(
        LoginPage.dateInputField(),
        isVisible()
      ),
      // Wait.upTo(Duration.ofMilliseconds(5000000)).until(
      //   LoginPage.countryCodeDropDown(),
      //   isVisible()
      // ),
      // Click.on(LoginPage.countryCodeDropDown()),
      // Wait.upTo(Duration.ofMilliseconds(5000000)).until(
      //   //Cannot find name 'equals'
      //   ListWhichText(equals(countryName)), 
      //   isVisible()
      // ),

      // Click.on(ListWhichText(equals(countryName)),
      // Wait.upTo(Duration.ofMilliseconds(5000000)).until(
      //   LoginPage.mobileNumberField(),
      //   isVisible()
      // ),
      // Enter.theValue(mobileNumber).into(LoginPage.mobileNumberField()),
      // Click.on(LoginPage.ContinueButton())
    Click.on(LoginPage.dateInputField()),
      Enter.theValue('3333333').into(LoginPage.dateInputField()),
      Enter.theValue('QA Engineer').into(LoginPage.jobInputField()
    ),
    )

}
