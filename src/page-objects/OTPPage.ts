import { By, PageElement } from '@serenity-js/web'

export const OTPPage = {
 
  OTPInput: () => 
  PageElement.located(By.xpath('//*[@id="root"]/div/div/section/main/form/section/input')),

  // OTPInput: () => 
  // Target.the('OTP input field').located(by.css('.input input--otp')),


  timerButton: () =>
  PageElement.located(By.css('span[data-testid=timer]')),

  confirmButton: () => 
  PageElement.located(By.xpath('//*[@id="root"]/div/div/section/main/section/button[2]')), 
}
