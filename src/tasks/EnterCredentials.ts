import { equals } from '@serenity-js/assertions'
import {  Duration, Task, Wait} from '@serenity-js/core'
import { Click, isVisible, Scroll } from '@serenity-js/web'

import { ListWhichText } from '../page-objects/ListWhichText'
import { LoginPage } from '../page-objects/LoginPage'
import { ByTestId } from './../page-objects/ByTestId';

export const EnterCredentials = {
    withCountryCodeAndMobileNumber: (countryName: string, mobileNumber) =>
        Task.where(
            `#actor select country ${countryName}`,
            Wait.upTo(Duration.ofMilliseconds(5000000)).until(
                LoginPage.countryCodeDropDown(),
                isVisible()
            ),
            Click.on(LoginPage.countryCodeDropDown()),
            Scroll.to(LoginPage.countryCode(countryName)),
            Wait.upTo(Duration.ofMilliseconds(5000000)).until(
                ByTestId('country-list-`${countryName}`'), 
                //LoginPage.countryCode(countryName),
                isVisible()
            ),

            Click.on(ByTestId('country-list-`${countryName}`')),
            //Click.on(LoginPage.countryCode(countryName))
   
        ),
        
}
