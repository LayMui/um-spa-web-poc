
import { Expectation } from '@serenity-js/core/lib/screenplay/questions/Expectation'
import { By, PageElements, Text} from '@serenity-js/web'

export const ListWhichText = (nameExpectation: Expectation<string>) =>
    PageElements.located(By.css('[data-testid="country-list-`${nameExpectation}`"]'))
  .where(Text, nameExpectation)
  .first()
