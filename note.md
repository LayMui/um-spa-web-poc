```
import Page from './page';
import { config } from '../../../config/wdio.conf'
import { setTimeout } from 'timers/promises';

/**
 * sub page containing specific selectors and methods for a specific page
 */

const SELECTORS = {
  COUNTRYSELECT: '~CountrySelect',
  PHONENUMBERINPUT: '~PhoneNumberInput',
  CONTINUE: '~Continue',
  BACK: '~Back',
  DONE: '~Done',
  PICKERWHEEL_DONE: '~done_button',
  DEVICE_WINDOW_ANDROID: '/hierarchy/android.widget.FrameLayout',
  DEVICE_WINDOW_IOS: '//XCUIElementTypeWindow',
  
  // IOS
  COUNTRYSELECT_IOS: '(//XCUIElementTypeOther[@name="CountrySelect"])[2]',
  COUNTRY_PICKERWHEEL_IOS: '//XCUIElementTypePickerWheel',
  PHONENUMBERINPUT_IOS: '//XCUIElementTypeOther[@name="PhoneNumberInput"]',
  BACK_IOS: '//XCUIElementTypeButton[@name="Back"]',
  CONTINUE_IOS: '(//XCUIElementTypeOther[@name="Continue"])[5]',
  ERRMSG_INCORRECTNUMBER_IOS:
  '//XCUIElementTypeStaticText[@name="Incorrect number. Please try again"]',
  WEBVIEW_PICKER_UPBUTTON_IOS: '//XCUIElementTypeOther[@name="input_accessory_view"]/XCUIElementTypeOther[1]/XCUIElementTypeOther[1]',

  // ANDROID
  COUNTRYSELECT_ANDROID: '//android.view.ViewGroup[@content-desc="CountrySelect"]/android.view.ViewGroup[1]',
  COUNTRYSELECT_LISTVIEW_ANDROID: '//android.view.ViewGroup/android.widget.ScrollView',
  PHONENUMBERINPUTVIEWGROUP_ANDROID:  '//android.view.ViewGroup[@content-desc="PhoneNumberInput"]/android.view.ViewGroup[1]',
  PHONENUMBERINPUTEDITTEXT_ANDROID: 'android.widget.EditText',
  CONTINUE_ANDROID: '//android.view.ViewGroup[@content-desc="Continue"]',
  BACK_ANDROID: '//android.widget.Button[@content-desc="Back"]',
  ERRMSG_INCORRECTNUMBER_ANDROID: '//*[@text=\'Incorrect number. Please try again\']',

  // IOS
  WEBVIEW_COUNTRYSELECT_IOS: '//XCUIElementTypeStaticText[@name="Country code"]',
  WEBVIEW_COUNTRYCODESELECT_IOS: '//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[6]',
  WEBVIEW_PHONENUMBERINPUT_IOS: '//XCUIElementTypeTextField',
  WEBVIEW_CLOSEICON_IOS: '//XCUIElementTypeImage[@name="cancel icon"]',
  WEBVIEW_DELETE_NUMBER_IOS:'//XCUIElementTypeKey[@name="Delete"]',
  WEBVIEW_CONTINUEBUTTON_IOS: '//XCUIElementTypeButton[@name="Continue"]',
  WEBVIEW_ERRMSG_INCORRECTNUMBER_IOS:  '//XCUIElementTypeStaticText[@name="Incorrect number. Please try again"]',

  // ANDROID
  WEBVIEW_COUNTRYSELECT_ANDROID: '//*[@text="Country code"]',
  WEBVIEW_COUNTRYCODESELECT_ANDROID: '//android.widget.ListView',
  WEBVIEW_PHONENUMBERINPUT_ANDROID:  '//android.widget.EditText',
  WEBVIEW_CLOSEICON_ANDROID: '//*[@text=\'cancel icon\']',
  WEBVIEW_CONTINUEBUTTON_ANDROID:  '//*[@text="Continue"]',
  WEBVIEW_ERRMSG_INCORRECTNUMBER_ANDROID: '//*[@text=\'Incorrect number. Please try again\']' ,

};


class LoginPage extends Page {

  async selectCountryCode(isWebView, countryFlagName) {

    if (isWebView) {
      if (JSON.parse(JSON.stringify(config.capabilities))[0].platformName === 'Android') {
        await $(SELECTORS.WEBVIEW_COUNTRYSELECT_ANDROID).waitForDisplayed({timeout:100000})
        await $(SELECTORS.WEBVIEW_COUNTRYSELECT_ANDROID).touchAction('tap') 
        await this.slideToCountry(countryFlagName,isWebView); 
        await $(`//android.view.View[contains(@text,'${countryFlagName}')]`).touchAction('tap');
    } else {
        await $(SELECTORS.WEBVIEW_COUNTRYSELECT_IOS).waitForDisplayed({timeout:100000})
        await $(SELECTORS.WEBVIEW_COUNTRYSELECT_IOS).touchAction('tap')
        await $(SELECTORS.WEBVIEW_COUNTRYCODESELECT_IOS).waitForDisplayed({timeout:100000})
        await this.slideToCountry(countryFlagName,isWebView); 
        await $(`//XCUIElementTypeStaticText[@name='${countryFlagName}']`).touchAction('tap');
      }    
    } else {
      if (JSON.parse(JSON.stringify(config.capabilities))[0].platformName === 'Android') {
        await $(SELECTORS.COUNTRYSELECT_ANDROID).waitForDisplayed({timeout:100000})
        await $(SELECTORS.COUNTRYSELECT_ANDROID).touchAction('tap')
        await $(SELECTORS.COUNTRYSELECT_LISTVIEW_ANDROID).waitForExist({timeout: 11000})
        await this.slideToCountry(countryFlagName,isWebView); 
        await $(`${SELECTORS.COUNTRYSELECT_LISTVIEW_ANDROID}//*[@text='${countryFlagName}']`).touchAction('tap');
      
      } else {
        await $(SELECTORS.COUNTRYSELECT_IOS).waitForDisplayed({timeout:100000})
        await $(SELECTORS.COUNTRYSELECT_IOS).touchAction('tap')
        await $(SELECTORS.COUNTRY_PICKERWHEEL_IOS).waitForExist({timeout: 11000});
        await this.slideToCountry(countryFlagName,isWebView); 
        await $(`//*[@value='${countryFlagName}']`).touchAction('tap');
        await $(SELECTORS.PICKERWHEEL_DONE).click();
      
      } 
    }
  }

  async slideToCountry(countryFlagName,iswebView){
    
    if(iswebView){
      if (JSON.parse(JSON.stringify(config.capabilities))[0].platformName === 'Android') {
        const startAndEndX = (await $(SELECTORS.DEVICE_WINDOW_ANDROID).getSize('width'))/2;
        const startY =  (await $(SELECTORS.DEVICE_WINDOW_ANDROID).getSize('height'))/2;
        const endY = startY*0.5;
        while( !(await $(`//android.view.View[contains(@text,'${countryFlagName}')]`).isDisplayed())){
        await browser.touchAction([
          {action:'longPress', x:startAndEndX, y:startY},
          {action:'moveTo', x:startAndEndX, y:endY},
          'release'])
      }
      }else{
        const startAndEndX = (await $(SELECTORS.DEVICE_WINDOW_IOS).getSize('width'))/2;
        const startY =  (await $(SELECTORS.DEVICE_WINDOW_IOS).getSize('height'))/2;
        const endY = startY*0.5;
        while( !(await $(`//XCUIElementTypeStaticText[@name='${countryFlagName}']`).isDisplayed())){
        await browser.touchAction([
          {action:'longPress', x:startAndEndX, y:startY},
          {action:'moveTo', x:startAndEndX, y:endY},
          'release'])
        }
      }
    }else{
      if(JSON.parse(JSON.stringify(config.capabilities))[0].platformName === 'Android'){
      const startAndEndX = (await $(SELECTORS.DEVICE_WINDOW_ANDROID).getSize('width'))/2;
      const startY =  (await $(SELECTORS.DEVICE_WINDOW_ANDROID).getSize('height'))/2;
      const endY = startY*0.75;
      while( !(await $(`${SELECTORS.COUNTRYSELECT_LISTVIEW_ANDROID}//*[@text='${countryFlagName}']`).isDisplayed())){
        await browser.touchAction([
          {action:'longPress', x:startAndEndX, y:startY},
          {action:'moveTo', x:startAndEndX, y:endY},
          'release'])
      }
    }else{
      //ios country pick slide to country 
      const startAndEndX = (await $(SELECTORS.DEVICE_WINDOW_IOS).getSize('width'))/2;
      const startY =  (await $(SELECTORS.DEVICE_WINDOW_IOS).getSize('height'))*0.9;
      const endY = (await $(SELECTORS.DEVICE_WINDOW_IOS).getSize('height'))*0.05;
      let correntCountry;
      do{
        correntCountry = ''+await $(SELECTORS.COUNTRY_PICKERWHEEL_IOS).getValue();
        await browser.touchAction([
          {action:'longPress', x:startAndEndX, y:startY},
          {action:'moveTo', x:startAndEndX, y:endY},
          'release'])
      } while( !(await $(`//*[@value='${correntCountry}']`).isDisplayed()))

      while( !(await $(`//*[@value='${countryFlagName}']`).isDisplayed())){
        await $(SELECTORS.WEBVIEW_PICKER_UPBUTTON_IOS).waitForDisplayed();
        await $(SELECTORS.WEBVIEW_PICKER_UPBUTTON_IOS).touchAction('tap');
      } 
    }
  }
}
  
  open() {
    return super.open('login');
  }
}

export default new LoginPage();

```
