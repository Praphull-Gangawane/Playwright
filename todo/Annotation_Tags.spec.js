import{test} from '@playwright/test'

test.skip('This one', async({page})=>{
    
})
test('not ready', async({page})=>{
    test.fail();
});
test.fixme('test to be fixed', async ({ page })=>{
});
//slowing execution time
test('slow test', async({page})=>{
    test.slow();
});
//conditional skip
test('skip this test', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Still working on it');
  });
  //group test
  test.describe('two tests', () => {
    test('one', async ({ page }) => {
      // ...
    });
  
    test('two', async ({ page }) => {
      // ...
    });
  });

  //Tags

  test('test login page' ,{tag:'@smoke'}, async({page})=>{

  })