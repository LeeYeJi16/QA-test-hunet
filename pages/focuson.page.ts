import { Page } from '@playwright/test';

export class FocusOnPage {

  constructor(private readonly page: Page) {}

  // FocusOn 페이지 이동
  async goto() {
    await this.page.goto('/membership/focus-on');
  }

  // 첫번째 카드 공유 → Link 클릭
  async clickShareLink() {

    // 첫번째 카드
    const firstCard = this.page.getByRole('listitem').filter({ hasText: 'CardsKaKaoFacebookLink' });

    // 공유 아이콘 클릭
    const shareButton = firstCard.locator('button').first();
    await shareButton.click();

    // Link 버튼 클릭
    const linkButton = this.page.getByRole('button', { name: 'Link' }).first();
    await linkButton.waitFor({ state: 'visible' });
    await linkButton.click();
  }

}