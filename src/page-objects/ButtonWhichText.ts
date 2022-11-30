
import { Expectation } from '@serenity-js/core/lib/screenplay/questions/Expectation'
import { By, PageElements, Text} from '@serenity-js/web'

export const ButtonWhichText = (nameExpectation: Expectation<string>) =>
    PageElements.located(By.css('[data-testid="button"]'))
  .where(Text, nameExpectation)
