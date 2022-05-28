import puppeteer from "puppeteer";
async function start(link: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${link}`);
  const result = await page.screenshot({ path: `amazing.png`, fullPage: true });
  await browser.close();
  return result;
}

export const searchImage = async (req: any, res: any) => {
  try {
    const { searchTerm } = req.body;
    const searchLink = `https://www.google.com/search?q=${searchTerm}&hl=en&tbm=isch&sclient=img`;


    const rest = await start(searchLink);
    // console.log(rest);
    
    res.send({ok: true, rest});
  } catch (error) {
    console.log(error);
    res.send({ ok: false, error });
  }
};
