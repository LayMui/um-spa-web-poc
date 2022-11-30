
import { equals } from '@serenity-js/assertions'
import { Duration, Task, Wait } from '@serenity-js/core'
import { Click, Enter, isVisible } from '@serenity-js/web'

import { ButtonWhichText } from '../page-objects/ButtonWhichText';
import { OTPPage } from '../page-objects/OTPPage';


export const ConfirmWith = {
    OTP: (OTPCode: number) =>
        Task.where(
            `#actor enter OTP code ${OTPCode}`,
            Wait.upTo(Duration.ofMilliseconds(5000000)).until(
                OTPPage.OTPInput(),
                isVisible(),
            ),
            Click.on(OTPPage.OTPInput()),
            Enter.theValue(OTPCode).into(OTPPage.OTPInput()),

            // eslint-disable-next-line @typescript-eslint/indent
              Wait.upTo(Duration.ofMilliseconds(5000000)).until(
                OTPPage.confirmButton(),
                isVisible(),
            ),
            Click.on(OTPPage.confirmButton()),
     
            // Wait.upTo(Duration.ofMilliseconds(5000000)).until(
            //     //Cannot find name 'equals'
            //     ButtonWhichText(equals('Confirm')), 
            //     isEnabled(),
            // ),
            // Click.on(ButtonWhichText(equals('Confirm')))
             

        ),
        
}
          
