import { Task } from '@serenity-js/core';
import { By, PageElement } from '@serenity-js/web'


export const LoginPage = {
  login: () =>
  PageElement.located(By.id('qsLoginBtn')),
    
  countryCodeDropDown: () =>
  PageElement.located(By.css('div[data-testid=input_button]')),

  mobileNumberField: () =>
  PageElement.located(By.xpath('//*[@id="root"]/div/div/section/main/form/section/label/input')),
   
  ContinueButton: () =>
  PageElement.located(By.css('button[data-testid=button]')),
   
  countryCode: (countryName: string) =>
  PageElement.located(By.css('li[data-testid="country-list-`${countryName}`"]')),

  dateInputField: () => 
  PageElement.located(By.css('input[data-testid=myDate]')),

  jobInputField: () => 
  PageElement.located(By.id('job'))
}
