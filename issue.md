 ```
 <ul class="country-list">
<li class="country-list__item" id="0" data-testid="country-list-Singapore">
 <div class="country-list__radio">
</div><span class="country-list__flag">🇸🇬</span>
<span class="country-list__country">+65 Singapore</span>
</li>
.....

<li class="country-list__item" id="40" data-testid="country-list-United States">
<div class="country-list__radio"></div>
<span class="country-list__flag">🇺🇸</span>
<span class="country-list__country">United States</span>
<span class="country-list__code">+1</span>
</li>
```
 
 
``` 
 by css ('div[data-testid=input_button]') does become visible (3s 181ms)
[test:test:execute] [0-0]       ✓ James clicks on page element located by css ('div[data-testid=input_button]') (112ms)
[test:test:execute] [0-0]       ✗ James scrolls to page element located by css ('li[data-testid="country-list-`${countryName}`"]') (17ms)
[test:test:execute] [0-0]         [object Object]
[test:test:execute] [0-0]   ⇢ Then he is able to perform OTP
[test:test:execute] [0-0] 
```
