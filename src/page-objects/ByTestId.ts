
import { Answerable, q } from '@serenity-js/core'
import { By, PageElement } from '@serenity-js/web'

export const ByTestId = (dataTestId: Answerable<string>) =>
    PageElement.located(By.css(q`[data-test-id="${ dataTestId }"]`))
