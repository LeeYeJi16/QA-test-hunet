import { test } from '@playwright/test';
import { FocusOnPage } from '../pages/focuson.page';

test('카드 내 공유 버튼 Link 클릭', async ({ page }) => {

  const focuson = new FocusOnPage(page);

  await focuson.goto();
  await focuson.clickShareLink();

});