Business Need: Login to SPA (Single Page Application)
  In order to have secured access the app services on SPA
  As a farmer James
  James want to able to verify using the One time password authentication method

@test
  Rule: Must able to get OTP when valid mobile number and country code is provided
  Example: James is able to get a OTP by providing a valid mobile number and country code

    Given James is at the SPA login
    When he select a country code and a valid mobile number
     | countryFlagName        | mobileNumber |
     | 🇺🇸 +1 United States    | 38888888888   |
    Then he is able to perform OTP
