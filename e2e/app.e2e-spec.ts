import { SMSWarriorsAdminPage } from './app.po';

describe('smswarriors-admin App', () => {
  let page: SMSWarriorsAdminPage;

  beforeEach(() => {
    page = new SMSWarriorsAdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
