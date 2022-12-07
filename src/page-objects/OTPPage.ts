import { By, PageElement } from '@serenity-js/web'

export const OTPPage = {
 
    OTPInput: () => 
    // PageElement.located(By.xpath('//*[@id="root"]/div/div/section/main/form/section/input')),
        PageElement.located(
            By.css('input[data-testid="InputMask"]')
        ),
    // // OTPInput: () => 
    // Target.the('OTP input field').located(by.css('.input input--otp')),


    ResendButton: () =>
        PageElement.located(By.css('button[data-testid="ResendButton"]')),

    confirmButton: () => 
        PageElement.located(By.css('button[data-testid="ConfirmationButton"]')),
      //  PageElement.located(By.xpath('//*[@id="root"]/div/div/section/main/section/button[2]')),
}
