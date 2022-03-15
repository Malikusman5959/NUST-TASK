import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetchFeeds } from './Fetch'
import fs from "fs";
import { parseString } from "xml2js";
import Post from './Post'
import moment from 'moment';

function Feeds() {

    const [feeds, setfeeds] = useState([]);
    const [searchKey, setsearchKey] = useState('');

    useEffect(() => {

        var xml = fetchFeeds();
        var json = null
        parseString(xml, function (err, results) {
            // parsing to json
             json = JSON.stringify(results);

             if (json && json.rss)
             {
                setfeeds(json.rss.channel.item);
             }
             else{
                 var dummyData = {
                    "rss": {
                      "channel": {
                        "title": "The Dwinnex",
                        "link": [
                          "",
                          "https://dwinnex.com"
                        ],
                        "description": "Journalism You Believe",
                        "lastBuildDate": "Wed, 09 Mar 2022 11:17:32 +0000",
                        "language": "en-US",
                        "updatePeriod": "hourly",
                        "updateFrequency": 1,
                        "generator": "https://wordpress.org/?v=5.9.2",
                        "item": [
                          {
                            "title": "Markets are being changed by these after-hours movers",
                            "link": "https://dwinnex.com/2022/03/09/markets-are-being-changed-by-these-after-hours-movers/",
                            "creator": {
                              "__cdata": "Dwinnex Team"
                            },
                            "pubDate": "Wed, 09 Mar 2022 11:16:32 +0000",
                            "category": {
                              "__cdata": "Business"
                            },
                            "guid": "https://dwinnex.com/?p=108194",
                            "description": {
                              "__cdata": "<p>As the name implies, after market movers are stocks traded after normal business hours. The volume of after-hours traders drops earlier rather than later, even though after-hours trading goes until 8 p.m. Immediately after the close on the main markets, after-hours markets open at 4 pm in the United States. In this way, traders and [&#8230;]</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/03/09/markets-are-being-changed-by-these-after-hours-movers/\">Markets are being changed by these after-hours movers</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            },
                            "encoded": {
                              "__cdata": "<p>As the name implies, after market movers are stocks traded after normal business hours. The volume of after-hours traders drops earlier rather than later, even though after-hours trading goes until 8 p.m.</p>\n<p>Immediately after the close on the main markets, after-hours markets open at 4 pm in the United States. In this way, traders and investors are able to act on breaking news following market close.</p>\n<p>An earnings announcement typically spikes the volume, but it subsides as the session progresses. As the session comes to a close, volume drops precipitously.</p>\n<p>When compared to regular business hours, during the late session, the number of after-hour stock trades is tiny. In after hours moving, electronic communications networks (ECNs) are mainly used.</p>\n<p>Can you reap any benefits from trading in after hour movers? In principle, yes, but first you should do some research.</p>\n<p>Here are today&#8217;s best <a href=\"https://stockstelegraph.com/after-market/\">after hours movers</a>.</p>\n<h2><strong>U.S. Well Services Inc:</strong></h2>\n<p>U.S. Well Services Inc. (<a href=\"https://finance.yahoo.com/quote/USWS?p=USWS&amp;.tsrc=fin-srch\">USWS</a>) shares were rising 21.71% in after-market at last check. USWS&#8217;s stock lost 0.00% to close Tuesday&#8217;s session at $1.75. The stock volume remained 68.76 million shares, which was higher than the average daily volume of 3.15 million shares within the past 50 days. USWS shares have fallen by -68.35% over the last 12 months, and they have moved up by 36.72% in the past week. Over the past three months, the stock has gained 15.89%, while over the past six months, it has shed -39.07%. Further, the company has a current market of $84.14 million and its outstanding shares stood at 29.80 million.</p>\n<h2><strong>Houston American Energy Corp:</strong></h2>\n<p>At last check in after-market trading, shares of Houston American Energy Corp. (<a href=\"https://finance.yahoo.com/quote/HUSA?p=HUSA&amp;.tsrc=fin-srch\">HUSA</a>) were up 19.14%. HUSA&#8217;s stock closed last session at $6.95, decreasing -38.50% or -$4.35. Shares of the company fluctuated between $5.91 and $16.61 throughout the day. The number of shares exchanged was 62.75 million, greater than the company&#8217;s 50-day daily volume of 5.99 million and higher than its Year to date volume of 6.64 million. In the past 12 months, the company&#8217;s stock has retreated 221.76%, and in the last one week, the stock has moved up 372.79%. For the last six months, the stock has gained a total of 267.72%, and over the last three months, the stock has increased by 348.39%. The stock has returned 386.01% so far this year..</p>\n<h2><strong>Bumble Inc:</strong></h2>\n<p>Bumble Inc. (<a href=\"https://finance.yahoo.com/quote/BMBL?p=BMBL&amp;.tsrc=fin-srch\">BMBL</a>) shares have gained 19.57% in Tuesday&#8217;s after-market session. Bumble Inc.&#8217;s stock added 2.65% to finish last trading session at $16.66. The stock recorded a trading volume of 11.77 million shares, which is below the average daily trading volume published for the last 50 days of 2.14 million shares. The shares of Bumble Inc. have advanced -28.65% in the last five days; however, they have lost -39.77% over the last one month. The stock price has shed -49.89% over the last three months and has lost -73.68 percent so far this year. Further, the stock is being traded at a price to earnings ratio of 12.58. Additionally, it has a price to cash flow ratio of 42.57 and its price to sales ratio stands at 3.21.</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/03/09/markets-are-being-changed-by-these-after-hours-movers/\">Markets are being changed by these after-hours movers</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            }
                          },
                          {
                            "title": "Remark Holdings, Inc. (MARK) Stock Surged 8.73% Pre-Market, Here’s Why",
                            "link": "https://dwinnex.com/2022/02/22/mark-stock-surged-8-73-pre-market-heres-why/",
                            "creator": {
                              "__cdata": "Dwinnex Team"
                            },
                            "pubDate": "Tue, 22 Feb 2022 14:28:13 +0000",
                            "category": [
                              {
                                "__cdata": "Companies"
                              },
                              {
                                "__cdata": "MARK"
                              },
                              {
                                "__cdata": "MARK stock"
                              },
                              {
                                "__cdata": "MARK Stock Price"
                              },
                              {
                                "__cdata": "Remark Holdings"
                              }
                            ],
                            "guid": "https://dwinnex.com/?p=108188",
                            "description": {
                              "__cdata": "<p>Remark Holdings, Inc. (MARK) stock soared 8.73% in the pre-market trading session at the price of $0.91 despite no fundamental updates. MARK provides an integrated suite of artificial intelligence AI solutions that help organizations and enterprises solve issues, downsize risk and deliver positive results. It&#8217;s AI products are available in a broad range of applications [&#8230;]</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/02/22/mark-stock-surged-8-73-pre-market-heres-why/\">Remark Holdings, Inc. (MARK) Stock Surged 8.73% Pre-Market, Here’s Why</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            },
                            "encoded": {
                              "__cdata": "<p>Remark Holdings, Inc. (MARK) stock soared 8.73% in the pre-market trading session at the price of $0.91 despite no fundamental updates. MARK provides an integrated suite of artificial intelligence AI solutions that help organizations and enterprises solve issues, downsize risk and deliver positive results. It&#8217;s AI products are available in a broad range of applications within the financial, retail, public safety, and workplace arenas.</p>\n<h2><strong>MARK Partnered with isMedia</strong></h2>\n<p>On 13th December 2021, MARK <a href=\"https://www.prnewswire.com/news-releases/remark-holdings-partners-with-ismedia-to-launch-nft-platform-301443065.html\" target=\"_blank\" rel=\"noopener\">declared</a> a partnership deal with isMedia to establish a non-fungible token platform. The NFT platform launched with the first drop anchored by the intellectual property collection of its subsidiary, Bikini.com. The NFT platform has expected to launch in early 2022 and works in accordance with the company&#8217;s AI technology. The initial phase of this platform will feature collectible NFTs from influencers of Bikini.com. Future offerings will possess drops from performers, entertainers, anchors, singers, and international celebrities.</p>\n<h3><strong>Management Comments</strong></h3>\n<p>Chairman and Chief Executive Officer of MARK, Kai-Shing Tao, remarked that isMedia had created a user-friendly NFT mobile application that delivers iterative, rapid, realistic designs with superb realism and greater adaptability. The NFT platform will host unique content of performers, entertainers, and iconic figures who made records with their characters and intellectual property. Moreover, the platform will leverage comprehensive designs and brand equity maintained by Bikini.com.</p>\n<p>Chief Executive Officer of isMedia, Ju Sung Myung, commented that they were eager to collaborate with MARK to leverage their technical capacities and monetize the intellectual properties possessed by Remark. MARK has a long history of leading investment in the NFT space and innovation in cutting-edge technology. The company has dedicated to compiling unique content and offering a user-friendly platform interface for all clients, he added.</p>\n<h2><strong>MARK Received $30M Debt Financing</strong></h2>\n<p>Earlier on 6th December 2021, MARK reported signing a $30M debt financing deal with Mudrick Capital Management. The company intends to use the financing to reimburse debts and liabilities, fund working capital for ongoing projects, and support new business initiatives. The funds will be invested in infrastructure, data analytics, and security of Metaverse businesses.</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/02/22/mark-stock-surged-8-73-pre-market-heres-why/\">Remark Holdings, Inc. (MARK) Stock Surged 8.73% Pre-Market, Here’s Why</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            }
                          },
                          {
                            "title": "Here are some stocks under 10 dollars that you don&#8217;t want to miss",
                            "link": "https://dwinnex.com/2022/02/17/here-are-some-stocks-under-10-dollars-that-you-dont-want-to-miss/",
                            "creator": {
                              "__cdata": "Dwinnex Team"
                            },
                            "pubDate": "Thu, 17 Feb 2022 11:04:53 +0000",
                            "category": [
                              {
                                "__cdata": "Business"
                              },
                              {
                                "__cdata": "JFIN"
                              },
                              {
                                "__cdata": "Jiayin Group"
                              },
                              {
                                "__cdata": "NN Inc."
                              },
                              {
                                "__cdata": "NNBR"
                              },
                              {
                                "__cdata": "OVID"
                              },
                              {
                                "__cdata": "Ovid Therapeutics"
                              },
                              {
                                "__cdata": "Top under 10 Dollar Stocks"
                              },
                              {
                                "__cdata": "Top under 10 Dollar Stocks To Invest"
                              }
                            ],
                            "guid": "https://dwinnex.com/?p=108184",
                            "description": {
                              "__cdata": "<p>A great place to start is with stocks under 10 dollars. Gaining market entry experience is considered a pragmatic strategy to advance in the business world. There are several attractive stocks under 10 dollars that are expected to deliver high returns. Small-priced stocks are particularly risky, as they carry a higher level of risk than [&#8230;]</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/02/17/here-are-some-stocks-under-10-dollars-that-you-dont-want-to-miss/\">Here are some stocks under 10 dollars that you don&#8217;t want to miss</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            },
                            "encoded": {
                              "__cdata": "<p>A great place to start is with stocks under 10 dollars. Gaining market entry experience is considered a pragmatic strategy to advance in the business world. There are several attractive stocks under 10 dollars that are expected to deliver high returns.</p>\n<p>Small-priced stocks are particularly risky, as they carry a higher level of risk than larger stocks. On the other hand, a conservative investor who is willing to take on the risks of investing in out-of-favor assets can gain success.</p>\n<h2><strong>Top under 10 Dollar Stocks To Invest:</strong></h2>\n<p>Here we have collected for you the top <a href=\"https://stockstelegraph.com/stocks-under-10/\"><strong>stocks under 10 dollar</strong></a> in 2022 after a research. You do not need to break your budget to buy these stocks.</p>\n<h3><strong>NN Inc:</strong></h3>\n<p>The price of NN Inc. (NNBR) moved up by $0.17 during the normal trading session on Wednesday to trade at $3.28. The NN Inc. (nnbr) stock has a trading volume of 0.2 million shares, which is high, compared to its average daily volume of 183.55K shares.</p>\n<p>Wall Street analysts tracking the NN Inc. (NASDAQ: NNBR) stock on daily basis. Out of 2 analysts, 2 deeming the stock a Buy and 0 gave it a rating of OVERWEIGHT. Another 0 recommended that NNBR is a HOLD, while 0 rated it UNDERWEIGHT and the 0 recommended SELL. If we look at the broader picture, the above ratings give the stock an average analyst rating of 2.00.</p>\n<h3><strong>Ovid Therapeutics Inc:</strong></h3>\n<p>Ovid Therapeutics Inc.(<a href=\"https://stockstelegraph.com/quotes/OVID/\"><strong>OVID</strong></a>) kicked off the trading day on 02/16/22 with a price decrease of -0.31%, equivalent to -$0.01 relative change for the day. Taking a more long-term approach, OVID had a 52-week range of $2.58 to $4.80. At the time of this article’s publishing, this stock is trading at $3.20.</p>\n<p>The Williams Percent Range or Williams %R is a well-known specialized pointer made by Larry Williams to help recognize overbought and oversold circumstances. Ovid Therapeutics Inc. (NASDAQ: OVID)’s Williams Percent Range or Williams %R at the time of writing to be seated at 6.78% for 9-Day. It is also calculated for different time spans. Currently for this organization, Williams %R is stood at 5.47% for 14-Day, 5.47% for 20-Day, 39.77% for 50-Day and to be seated 48.95% for 100-Day. Relative Strength Index, or RSI(14), which is a technical analysis gauge, also used to measure momentum on a scale of zero to 100 for overbought and oversold. In the case of Ovid Therapeutics Inc., the RSI reading has hit 59.55 for 14-Day.</p>\n<h3><strong>Jiayin Group Inc:</strong></h3>\n<p>Jiayin Group Inc. (<a href=\"https://stockstelegraph.com/quotes/JFIN/\"><strong>JFIN</strong></a>) is priced at $2.39 after the most recent trading session. The stock price was reached a high price of $2.40, prior to closing the session it reached the value of $2.39. The stock touched a low price of $2.28.</p>\n<p>According to WSJ, Jiayin Group Inc. (NASDAQ: JFIN) obtained an estimated Buy proposal from the 1 brokerage firm currently keeping a deep eye on the stock performance as compared to its rivals. 0 equity research analysts rated the shares with a selling strategy, 0 gave a hold approach, 1 gave a purchase tip, 0 gave the firm a overweight advice and 0 put the stock under the underweight category. The average price goal of one year between several banks and credit unions that last year discussed the stock is $89.36.</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/02/17/here-are-some-stocks-under-10-dollars-that-you-dont-want-to-miss/\">Here are some stocks under 10 dollars that you don&#8217;t want to miss</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            }
                          },
                          {
                            "title": "Palatin technologies, Inc. (PTN) Stock Soaring in Premarket, Here’s why.",
                            "link": "https://dwinnex.com/2022/02/15/ptn-stock-soaring-in-premarket/",
                            "creator": {
                              "__cdata": "Dwinnex Team"
                            },
                            "pubDate": "Tue, 15 Feb 2022 13:05:12 +0000",
                            "category": [
                              {
                                "__cdata": "Business"
                              },
                              {
                                "__cdata": "Palatin Technologies Inc."
                              },
                              {
                                "__cdata": "PTN"
                              },
                              {
                                "__cdata": "PTN stock"
                              }
                            ],
                            "guid": "http://3.89.107.63/?p=108179",
                            "description": {
                              "__cdata": "<p>Palatin Technologies, Inc. (PTN) is a leading biotherapeutics company engaged in the development of medication based on molecules that regulate melanocortin activity. The company aimed at the treatment of diseases with unmet medical needs and commercial possibilities. The company’s strategy is the development of products and the formation of marketing partnerships with leading businesses. The [&#8230;]</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/02/15/ptn-stock-soaring-in-premarket/\">Palatin technologies, Inc. (PTN) Stock Soaring in Premarket, Here’s why.</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            },
                            "encoded": {
                              "__cdata": "<p>Palatin Technologies, Inc. (PTN) is a leading biotherapeutics company engaged in the development of medication based on molecules that regulate melanocortin activity. The company aimed at the treatment of diseases with unmet medical needs and commercial possibilities. The company’s strategy is the development of products and the formation of marketing partnerships with leading businesses.</p>\n<p>The price of PTN stock during regular trading on February 14, 2022, with a 1.27% decline was $0.39. At last check in the premarket on February 15, 2022, the stock rocketed by 10.3%.</p>\n<h2><strong>PTN: Key Financials</strong></h2>\n<p>On February 14, 2022, PTN <a href=\"https://lifesci.s3.amazonaws.com/sec-filings/0000911216/000165495422001646.pdf\">released</a> its financial outcomes for three months ended December 31, 2021. Some of the significant updates are mentioned below.</p>\n<h2><strong>Revenue</strong></h2>\n<p>Total revenue in the quarter in 2021 was recorded to be $0.32 million compared to $0.16 million in the same period of 2020. The company observed an increase in revenue year over year. The company beat the analysts’ estimated revenue by $186.1 thousand.</p>\n<h2><strong>EPS</strong></h2>\n<p>Basic and diluted net loss per share in the quarter of 2021 was $8.68 million or $0.04 corresponding to $9.99 million or $0.04 in the same period of 2020. The company observed a decrease in net loss over the year. The company missed the analysts’ estimates by -$0.01.</p>\n<h2><strong>PTN: Events and Happenings</strong></h2>\n<p>On January 21, 2022, PTN informed about the poster presentation of the optimistic effect of PL8177 for the treatment of ulcerative colitis in an animal model. The results were presented at the Virtual Crohn&#8217;s and Colitis Congress held on January 21, 2022. On January 7, 2022, PTN updated its Executive management’s presentation at the Virtual H.C. Wainwright BioConnect Conference on January 10–13, 2022.</p>\n<p>On December 28, 2021, PTN updated about the commencement of Phase 3 MELODY-1 clinical trials of PL9643 in dry eye disease patients. The trials enrolled approximately 400 patients and top-line outcomes are predictable in the second half of 2022. On November 30, 2021, PTN was informed about the issuance of Notice of Allowance for Application No. 16/927,347 by USPTO.</p>\n<p>On October 22, 2021, PTN announced its poster presentation of diabetic retinopathy at the Annual Meeting of the American Society of Retina Specialists 2021.</p>\n<h2><strong>Conclusion</strong></h2>\n<p>PTN stock is 13% down the past six months due to recessing economic conditions in the pandemic. The current premarket stock rise is due to phenomenal financial results as the company beat the analysts’ estimates for revenue but its EPS missed the target.</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/02/15/ptn-stock-soaring-in-premarket/\">Palatin technologies, Inc. (PTN) Stock Soaring in Premarket, Here’s why.</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            }
                          },
                          {
                            "title": "Adagio Therapeutics, Inc. (ADGI) gained in the current market; here is why?",
                            "link": "https://dwinnex.com/2022/02/09/adagio-therapeutics-inc-adgi-gained-in-the-current-market-here-is-why/",
                            "creator": {
                              "__cdata": "Dwinnex Team"
                            },
                            "pubDate": "Wed, 09 Feb 2022 17:29:05 +0000",
                            "category": [
                              {
                                "__cdata": "Business"
                              },
                              {
                                "__cdata": "Adagio Therapeutics"
                              },
                              {
                                "__cdata": "ADGI"
                              },
                              {
                                "__cdata": "ADGI Stock"
                              },
                              {
                                "__cdata": "ADGI Stock Price"
                              }
                            ],
                            "guid": "http://3.89.107.63/?p=108176",
                            "description": {
                              "__cdata": "<p>Adagio Therapeutics, Inc. (ADGI) gained in the current market after the company announced the amendment in its filing of beneficial ownership by persons. ADGI values at $11.47, shedding more than 17 percent compared to yesterday’s closing price. The stock finished at $9.81 at the end of the last trading session. The stock volume traded in [&#8230;]</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/02/09/adagio-therapeutics-inc-adgi-gained-in-the-current-market-here-is-why/\">Adagio Therapeutics, Inc. (ADGI) gained in the current market; here is why?</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            },
                            "encoded": {
                              "__cdata": "<p>Adagio Therapeutics, Inc. (ADGI) gained in the current market after the company <a href=\"https://investors.adagiotx.com/static-files/166af90a-da53-423d-9cc8-08fd5c76e659\">announced</a> the amendment in its filing of beneficial ownership by persons. ADGI values at $11.47, shedding more than 17 percent compared to yesterday’s closing price. The stock finished at $9.81 at the end of the last trading session. The stock volume traded in the last trading session was roughly 3.79 million shares. The current market cap of the company is around $1.27 billion.</p>\n<h2><strong>ADGI amended its filing of beneficial ownership by persons</strong></h2>\n<p>Beneficial ownership of approximately 15,592,582 shares, or 14.015 percent of the class, has been determined to be beneficial. The number of shares that a given individual possesses will determine the specific ownership of that individual. The numbers indicate the exclusive right to vote or control the votes, and they total 6,703,249. The numbers reflect shared voting authority, whereas zero symbolizes no shared voting authority. A total of 15,592,582 are the figures that indicate the exclusive ability to dispose or command the dispositions.</p>\n<p>A person or persons are known to have the right to receive or the power to direct the receipt of dividends from, or the proceeds from, the sale of, the common stock of Adagio Therapeutics, Inc. (ADGI).  The power to direct the receipt of dividends from, or the proceeds from, the sale of the common stock of Adagio Therapeutics, Inc. (ADGI), or the power to direct the receipt of dividends from, or the proceeds from, the sale of the common stock of Adagio Therapeutic (ADGI). According to the most current available information, the Fidelity Growth Company Commingled Pool&#8217;s investment in Adagio Therapeutics, Inc. (ADGI) common stock amounted to 6,455,149 shares, or 5.802 percent of the company&#8217;s total outstanding common stock, as of December 31, 2021.</p>\n<h2><strong>Conclusion</strong></h2>\n<p>Adagio Therapeutics, Inc. (ADGI) announced its amendments in the ownership by persons in a sec filing. The company previously announced its statement of changes in beneficial ownership on February 1, 2022.</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/02/09/adagio-therapeutics-inc-adgi-gained-in-the-current-market-here-is-why/\">Adagio Therapeutics, Inc. (ADGI) gained in the current market; here is why?</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            }
                          },
                          {
                            "title": "Clearfield, Inc. (CLFD) Stock Surging in Premarket, Here’s Why",
                            "link": "https://dwinnex.com/2022/01/28/clearfield-inc-clfd-stock-surging-in-premarket-heres-why/",
                            "creator": {
                              "__cdata": "Abdul Qadir"
                            },
                            "pubDate": "Fri, 28 Jan 2022 10:26:27 +0000",
                            "category": [
                              {
                                "__cdata": "Business"
                              },
                              {
                                "__cdata": "Clearfield"
                              },
                              {
                                "__cdata": "CLFD"
                              },
                              {
                                "__cdata": "CLFD stock"
                              },
                              {
                                "__cdata": "CLFD Stock Price"
                              }
                            ],
                            "guid": "http://3.89.107.63/?p=108168",
                            "description": {
                              "__cdata": "<p>Clearfield, Inc. (CLFD), a company that manufactures, markets and sells standard and custom passive connectivity products, has surged 11.41% in premarket trading session and consequently is trading at $54.20 at the time of the writing. During Thursday’s regular trading hours, the stock declined by 3.15% and closed the day at $48.65. The surge in premarket [&#8230;]</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/01/28/clearfield-inc-clfd-stock-surging-in-premarket-heres-why/\">Clearfield, Inc. (CLFD) Stock Surging in Premarket, Here’s Why</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            },
                            "encoded": {
                              "__cdata": "\n<p>Clearfield, Inc. (CLFD), a company that manufactures, markets and sells standard and custom passive connectivity products, has surged 11.41% in premarket trading session and consequently is trading at $54.20 at the time of the writing. During Thursday’s regular trading hours, the stock declined by 3.15% and closed the day at $48.65. The surge in premarket could be attributed to record Q1 2022 results.</p>\n\n\n\n<h2>Q1 2022 Operational Results</h2>\n\n\n\n<p>In the late hours of Thursday, CLFD released the <a href=\"https://ir.seeclearfield.com/news-events/press-releases/detail/269/clearfield-reports-record-fiscal-first-quarter-2022-results\">operational results</a> for first quarter of fiscal year 2022. The quarter ended on 31<sup>st</sup> December 2021. The company generated net sales of $51 million during the quarter against $27 million for the same quarter of fiscal 2021. The gross profit for the three month period stood at $23 million against $11.4 million for the same three month period of fiscal 2021. The net income generated by the company during the period was $10.4 million (or $0.75 per basic and diluted share) against $3.2 million (or $0.23 per basic and diluted share) for the same period of fiscal year 2021.</p>\n\n\n\n<h2>Financial Performance</h2>\n\n\n\n<p>Alongside, CLFD also released the <a href=\"https://ir.seeclearfield.com/news-events/press-releases/detail/269/clearfield-reports-record-fiscal-first-quarter-2022-results\">financial metrics</a> for the period ended 31<sup>st </sup>December 2021. The company had cash and cash equivalents of $12.6 million on 31<sup>st</sup> December 2021. The total current assets in possession of the company on the said date were $84 million, while the total assets were estimated to be $137.7 million. Similarly, the total current liabilities payable by the company on the said date were $22 million, while the total liabilities were estimated to be $23.2 million. The total shareholders’ equity on the said date was $114.4 million.</p>\n\n\n\n<h2>Executive Commentary</h2>\n\n\n\n<p>While <a href=\"https://ir.seeclearfield.com/news-events/press-releases/detail/269/clearfield-reports-record-fiscal-first-quarter-2022-results\">commenting</a>, President and CEO of CLFD, Cheri Beranek said that the company has delivered another record-setting financial performance in the aforementioned quarter. It is doing so in a market that is evolving and growing with each passing quarter. The company is well-positioned to continue benefitting from the growing demand for fiber to the home and fiber to the business as a result of its commitment toward its customer base.</p>\n\n\n\n<h2>Future Outlook for CLFD</h2>\n\n\n\n<p>Last one month has seen CLFD stock falter by approximately 40%, the reasons being both market-related and company-specific. Looking ahead, the analysts believe that the stock holds several negative signals and despite of some positive developments, it is expected to perform weakly in next couple of weeks.</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/01/28/clearfield-inc-clfd-stock-surging-in-premarket-heres-why/\">Clearfield, Inc. (CLFD) Stock Surging in Premarket, Here’s Why</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            }
                          },
                          {
                            "title": "F5, Inc. (FFIV) Stock Faltering in Aftermarket, Here’s the Reason",
                            "link": "https://dwinnex.com/2022/01/26/f5-inc-ffiv-stock-faltering-in-aftermarket-heres-the-reason/",
                            "creator": {
                              "__cdata": "Maria Masood"
                            },
                            "pubDate": "Wed, 26 Jan 2022 07:23:46 +0000",
                            "category": [
                              {
                                "__cdata": "Business"
                              },
                              {
                                "__cdata": "F5"
                              },
                              {
                                "__cdata": "FFIV"
                              },
                              {
                                "__cdata": "FFIV stock"
                              },
                              {
                                "__cdata": "NASDAQ:FFIV"
                              }
                            ],
                            "guid": "http://3.89.107.63/?p=108163",
                            "description": {
                              "__cdata": "<p>F5, Inc. (FFIV), a company that provides multi-cloud application security and delivery solutions intended for the security, performance, and availability of network applications, servers, and storage systems, has plunged 14.69% during the aftermarket trading session to $188.65 at the time of the writing. During Tuesday’s regular session, the stock slid by 2.44% and closed the [&#8230;]</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/01/26/f5-inc-ffiv-stock-faltering-in-aftermarket-heres-the-reason/\">F5, Inc. (FFIV) Stock Faltering in Aftermarket, Here’s the Reason</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            },
                            "encoded": {
                              "__cdata": "\n<p>F5, Inc. (FFIV), a company that provides multi-cloud application security and delivery solutions intended for the security, performance, and availability of network applications, servers, and storage systems, has plunged 14.69% during the aftermarket trading session to $188.65 at the time of the writing. During Tuesday’s regular session, the stock slid by 2.44% and closed the day at $221.14. The decline could be attributed to lowered guidance for 2022 revenues.</p>\n\n\n\n<h2>FFIV Q1 2022 Operational Results</h2>\n\n\n\n<p>On Tuesday, FFIV announced the <a target=\"_blank\" href=\"https://finance.yahoo.com/news/f5-reports-10-first-quarter-210500034.html\" rel=\"noreferrer noopener\">operational results</a> for the first quarter of fiscal 2022. The quarter ended on 31st December 2021. The company generated net revenue of $343.1 million during the quarter against $288 million for the same quarter of 2020. The total operating expenses for the three months were $437.8 million against $391.8 million for the same three-month period of 2020. The net income generated by the company during the period was $93.55 million (or $1.54 and $151 per basic and diluted share respectively) against $87.6 million (or $1.43 and $1.41 per basic and diluted share respectively) for the same period of 2020.</p>\n\n\n\n<h2>Business Outlook</h2>\n\n\n\n<p>Alongside the operational results, FFIV also released the <a target=\"_blank\" href=\"https://finance.yahoo.com/news/f5-reports-10-first-quarter-210500034.html\" rel=\"noreferrer noopener\">business outlook</a> for upcoming periods. The company said that it expects the Q2, 2021 revenues to stand in the range of $610 to $650 million. The company expected the fiscal year 2022 revenue growth to stand in the range of 4.5% to 8%. Before that, the company expected an 8% to 9% growth for the full year of 2022. The company also expected fiscal 2022 software revenue growth to the top end of the previously provided 35% to 40% guidance range, while global services revenue is expected to grow by 1% to 2%.</p>\n\n\n\n<h2>Executive Commentary</h2>\n\n\n\n<p>François Locoh-Donou, President and CEO of FFIV, while&nbsp;<a target=\"_blank\" href=\"https://finance.yahoo.com/news/f5-reports-10-first-quarter-210500034.html\" rel=\"noreferrer noopener\">commenting</a>&nbsp;said that customers’ need to grow and evolve the applications supporting their businesses has led to the strong demand for the company’s application security and delivery solutions, which in turn caused 10% revenue growth during the quarter. Software solutions were in particular demand during the quarter with non-GAAP software revenue growing 47% compared to the same period for the previous fiscal.</p>\n\n\n\n<h2>Future Outlook for FFIV</h2>\n\n\n\n<p>Stats reveal that during the last month, FFIV had a meagre decline of approximately 5%. Analyst analyses show that there are no positive signals for stock in the upcoming few weeks, hence, a negative evaluation of the stock is being held as it is expected to perform weakly in the next couple of weeks.</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/01/26/f5-inc-ffiv-stock-faltering-in-aftermarket-heres-the-reason/\">F5, Inc. (FFIV) Stock Faltering in Aftermarket, Here’s the Reason</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            }
                          },
                          {
                            "title": "Here’s why Integrated Media Technologies Ltd. (IMTE) Stock Dipped in the Afterhours",
                            "link": "https://dwinnex.com/2022/01/19/mte-stock-dipped-in-the-afterhours/",
                            "creator": {
                              "__cdata": "Abdul Qadir"
                            },
                            "pubDate": "Wed, 19 Jan 2022 08:07:20 +0000",
                            "category": [
                              {
                                "__cdata": "Business"
                              },
                              {
                                "__cdata": "IMTE"
                              },
                              {
                                "__cdata": "IMTE Stock"
                              },
                              {
                                "__cdata": "Integrated Media Technologies Ltd."
                              }
                            ],
                            "guid": "http://3.89.107.63/?p=108154",
                            "description": {
                              "__cdata": "<p>Integrated Media Technologies Ltd. (IMTE) is an important company involved in the manufacturing and commercialization of nano-coated plates for filters and electronic glass. The company also distributes autostereoscopic 3D display devices. The company also served in the real estate and construction business. The price of IMTE stock during the regular trading on January 18, 2022, [&#8230;]</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/01/19/mte-stock-dipped-in-the-afterhours/\">Here’s why Integrated Media Technologies Ltd. (IMTE) Stock Dipped in the Afterhours</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            },
                            "encoded": {
                              "__cdata": "\n<p>Integrated Media Technologies Ltd. (IMTE) is an important company involved in the manufacturing and commercialization of nano-coated plates for filters and electronic glass. The company also distributes autostereoscopic 3D display devices. The company also served in the real estate and construction business.</p>\n\n\n\n<p>The price of IMTE stock during the regular trading on January 18, 2022, was $10.52 with a tremendous rise of 19.95%. At last check in the aftermarket, the stock was down slightly by 2.38%.</p>\n\n\n\n<h2><strong>IMTE: Events and Happenings</strong></h2>\n\n\n\n<p>On January 18, 2022, IMTE <a href=\"https://finance.yahoo.com/news/integrated-media-technology-limited-announces-115800063.html\" target=\"_blank\" rel=\"noreferrer noopener\">reported</a> about the closure of its digital assets trading portfolio Ouction’sdevelopment. It is designed with image cryptographic verification technology which served as a link for Online to Offline transactions.</p>\n\n\n\n<h2><strong>IMTE: CEO Comments</strong><strong></strong></h2>\n\n\n\n<p>Speaking at the occasion, CEO IMTE Kim Chan said that the business for non-fungible tokens during the last year had grown manifolds with the popularity of NFTs and cryptocurrency continued to surge. He further added that the utilization of blockchain, NFTs, and smart contracts is the basis of bringing online assets from the real to the virtual world.</p>\n\n\n\n<p>On January 5, 2022, IMTE reported raising the funds for the purchase and building of manufacturing infrastructure. The company agreed upon convertible note acquisition to raise approximately $10 million. On January 4, 2022, IMTE reported on the approval of a plan to divest its China lamination glass operation by the company’s BoDs. The company intended to rip either by selling the business unit or spinning off the unit into a publicly traded listed company.</p>\n\n\n\n<p>On December 30, 2021, IMTE reported about the entry into a deal related to Assignment and Assumption to take over the rights and liabilities on a Cooperation Contract for the development of a Blockchain business focused on an online asset market program on NFT trading market. On December 27, 2021, IMTE reported about the launch of Credit AI, an innovative collection of risk analytics for corporate bonds with a preliminary coverage universe of approximately 30,000 Chinese corporate bonds.</p>\n\n\n\n<p>On October 12, 2021, IMTE reported about entry into conditional sale and acquisition contract to purchase 100% equity interest in Magnum International Holdings Ltd, for$11 million paid via issuance of 3,630,360 ordinary shares of the company’s stock at the price of$3.03&nbsp;per share.</p>\n\n\n\n<h2><strong>Conclusion</strong></h2>\n\n\n\n<p>IMTE stock gained a tremendous 174% from the last six months period attributed to the company’s strong investor-oriented policies. The analysts believe that the company announced the completion of NFT trading program development, resultantly the stock gained momentum in the regular trading. The current aftermarket dip is due to the profit booking by the stockholders.</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/01/19/mte-stock-dipped-in-the-afterhours/\">Here’s why Integrated Media Technologies Ltd. (IMTE) Stock Dipped in the Afterhours</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            }
                          },
                          {
                            "title": "Alcon [NYSE: ALC] Unveil First and Only Water Gradient Contact Lens For Patients",
                            "link": "https://dwinnex.com/2022/01/11/alcon-nyse-alc-unveil-first-and-only-water-gradient-contact-lens-for-patients/",
                            "creator": {
                              "__cdata": "Abdul Qadir"
                            },
                            "pubDate": "Tue, 11 Jan 2022 06:51:17 +0000",
                            "category": [
                              {
                                "__cdata": "Technology"
                              },
                              {
                                "__cdata": "$ALC"
                              },
                              {
                                "__cdata": "ALC"
                              },
                              {
                                "__cdata": "ALC stock"
                              },
                              {
                                "__cdata": "Alcon Inc"
                              },
                              {
                                "__cdata": "Astigmatism"
                              },
                              {
                                "__cdata": "DAILIES TOTAL1"
                              },
                              {
                                "__cdata": "NYSE: ALC"
                              },
                              {
                                "__cdata": "SmarTears Technology"
                              },
                              {
                                "__cdata": "Water Gradient Contact Lens"
                              }
                            ],
                            "guid": "http://3.133.8.253/?p=108139",
                            "description": {
                              "__cdata": "<p>Alcon Inc. [NYSE: ALC] has launched the first and only Water Gradient contact lens for patients with astigmatism. The company has unveiled DAILIES TOTAL1 for Astigmatism. Alcon disclosed that the lenses will be available in the U.S. starting from March. The company has launched the contact lenses that Eye Care Professionals have been eagerly waiting [&#8230;]</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/01/11/alcon-nyse-alc-unveil-first-and-only-water-gradient-contact-lens-for-patients/\">Alcon [NYSE: ALC] Unveil First and Only Water Gradient Contact Lens For Patients</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            },
                            "encoded": {
                              "__cdata": "\n<p>Alcon Inc. [NYSE: ALC] has launched the first and only Water Gradient contact lens for patients with astigmatism. The company has unveiled DAILIES TOTAL1 for Astigmatism. Alcon disclosed that the lenses will be available in the <a href=\"http://3.133.8.253/tag/us/\">U.S</a>. starting from March. The company has launched the contact lenses that Eye Care Professionals have been eagerly waiting for their astigmatic patients.</p>\n\n\n\n<p>The first and only daily disposable toric lens with Water Gradient surface material is DAILIES TOTAL1 for Astigmatism. This lens material has a steady increase in water content until it reaches 100% water at the top, so all that comes into contact with the eye is a shield of moisture. Water Gradient lenses provide great comfort, allowing Eye Care Professionals to adapt and keep more astigmatic patients in contact lenses.</p>\n\n\n\n<p>Furthermore, the company confirmed that DAILIES TOTAL1 for Astigmatism will be available in the U.S. with a full 2,300 parameters starting in March 2022. Once set up there, the lenses are anticipated to launch to additional markets in late 2022. This unveiling expands Alcon’s portfolio of premium, daily single-use lenses, which already includes DAILIES TOTAL1 (sphere) and DAILIES TOTAL1 Multifocal, with a high-performing lens designed specifically for astigmatic patients.</p>\n\n\n\n<p>In addition, the lenses also feature two other proprietary technologies from Alcon. One is PRECISION BALANCE lens design and the other one is SmarTears <a href=\"http://3.133.8.253/category/technology/\">Technology</a>.</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/01/11/alcon-nyse-alc-unveil-first-and-only-water-gradient-contact-lens-for-patients/\">Alcon [NYSE: ALC] Unveil First and Only Water Gradient Contact Lens For Patients</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            }
                          },
                          {
                            "title": "Exact [NASDAQ: EXAS] Announces Acquisition of PreventionGenetics",
                            "link": "https://dwinnex.com/2022/01/10/exact-nasdaq-exas-announces-acquisition-of-preventiongenetics/",
                            "creator": {
                              "__cdata": "Abdul Qadir"
                            },
                            "pubDate": "Mon, 10 Jan 2022 06:53:28 +0000",
                            "category": [
                              {
                                "__cdata": "Business"
                              },
                              {
                                "__cdata": "$EXAS"
                              },
                              {
                                "__cdata": "Acquisition"
                              },
                              {
                                "__cdata": "Exact Sciences Corporation"
                              },
                              {
                                "__cdata": "EXAS"
                              },
                              {
                                "__cdata": "EXAS stock"
                              },
                              {
                                "__cdata": "Nasdaq"
                              },
                              {
                                "__cdata": "NASDAQ: EXAS"
                              },
                              {
                                "__cdata": "PreventionGenetics"
                              }
                            ],
                            "guid": "http://3.133.8.253/?p=108137",
                            "description": {
                              "__cdata": "<p>Exact Sciences Corporation [NASDAQ: EXAS] disclosed that it has purchased PreventionGenetics which is a genetic testing laboratory. The company has bought genetic testing laboratory to complete its sophisticated cancer diagnostics portfolio and back its entry into hereditary cancer testing (HCT). After the acquisition, PreventionGenetics will offer the clinical lab, specialized knowledge, and the basic technology [&#8230;]</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/01/10/exact-nasdaq-exas-announces-acquisition-of-preventiongenetics/\">Exact [NASDAQ: EXAS] Announces Acquisition of PreventionGenetics</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            },
                            "encoded": {
                              "__cdata": "\n<p>Exact Sciences Corporation [NASDAQ: EXAS] disclosed that it has purchased PreventionGenetics which is a genetic testing laboratory. The company has bought genetic testing laboratory to complete its sophisticated cancer diagnostics portfolio and back its entry into hereditary cancer testing (HCT).</p>\n\n\n\n<p>After the <a href=\"http://3.133.8.253/tag/acquisition/\">acquisition</a>, PreventionGenetics will offer the clinical lab, specialized knowledge, and the basic technology needed to speed up the accessibility of HCT and support more patients understanding their germline risk of cancer and other diseases. Presently, around 300,000 health care specialists and more than 200 large U.S. health systems have confidence in Exact Sciences&#8217; Cologuard and Oncotype DX tests in primary care, women&#8217;s health, oncology, and other specialties.</p>\n\n\n\n<p>Furthermore, after the acquisition of PreventionGenetics Exact Sciences is intending to take advantage of its unparalleled commercial reach in diagnostics to grow hereditary cancer and genetic testing throughout the U.S. and all around the world. PreventionGenetics is a CLIA-certified and CAP-accredited clinical DNA testing laboratory. It is offering more than 5,000 predefined genetic tests for nearly all clinically relevant genes, additional custom panels, and thorough germline whole exome and whole genome sequencing tests.</p>\n\n\n\n<p>In addition, the PreventionGenetics team is uncompromising in their quest for quality just like Exact Sciences. This focus, coupled with a best-in-class customer experience and processing times, won PreventionGenetics a good reputation and brand recognition among genetics specialists and counselors.</p>\n\n\n\n<h4><strong>Transaction Overview</strong></h4>\n\n\n\n<p>As per the <a href=\"http://3.133.8.253/tag/agreement/\">agreement</a>, PreventionGenetics earned a total payment of $190 million. It consists of 50% in Exact Sciences common stock and 50% in cash. PreventionGenetics anticipates preliminary, unaudited 2021 revenue of nearly $36 million and $3 million in adjusted EBITDA.</p>\n<p>The post <a rel=\"nofollow\" href=\"https://dwinnex.com/2022/01/10/exact-nasdaq-exas-announces-acquisition-of-preventiongenetics/\">Exact [NASDAQ: EXAS] Announces Acquisition of PreventionGenetics</a> appeared first on <a rel=\"nofollow\" href=\"https://dwinnex.com\">The Dwinnex</a>.</p>\n"
                            }
                          }
                        ]
                      }
                    }
                  }
                 setfeeds(dummyData.rss.channel.item)
             }
      
        });


    }, [])

    return (
        <div style={{ width: '100%', height: '100%' }}>

            <TopBar heading={'Dwinnex Feed'} searchKey={searchKey} setsearchKey={setsearchKey} />
            
            {/* Results */}
            {
                    <div style={{ height: '70%', maxHeight: '70vh', margin: '10px', display: 'flex', flexWrap: 'wrap', overflowY: 'scroll', justifyContent: 'flex-start', padding: '10px' }}>
                        {
                            feeds.length == 0 ?
                                <p style={{ textAlign: 'center', marginTop: '22%', color: '#2575c0' }}> No results found </p> :
                                feeds.map((item) => {

                                    if (searchKey == '' || item.title.toLowerCase().includes(searchKey.toLowerCase())) {
                                                return <Post item={item} />
                                    }
                                    else {
                                        return null
                                    }

                                }

                                )
                        }

                    </div>

            }




        </div>
    )
}


function TopBar({heading , searchKey , setsearchKey}) {


    return (
        <div style={{backgroundColor : '#ffffff' , width : '100%' , height : '100px' , display : 'flex' , flexDirection : 'row' , justifyContent : 'space-between' , alignItems : 'center'}}>
           
            <div style={{marginLeft : '38%' , display : 'flex' , flexDirection : 'row' , justifyContent : 'space-between' , alignItems : 'center'}}>
            <p style={{color : '#2575c0' , fontSize : '30px' , fontWeight : 'bold' , letterSpacing : '3px'}}> {heading.toUpperCase()} </p>
            </div>

              {/* Selectors */}
               { <div style={{marginRight : '15px'}}>
               <input style={{height : '28px',  width: '180px', marginRight: '5px', border: '2px solid #2575c0', borderRadius: '8px' }} type="text" value={searchKey} onChange={(e) => { setsearchKey(e.target.value) }} />
                    <button style={{height : '32px',fontSize: '14px', fontFamily: 'Roboto, sans-serif', color: '#ffffff', width: '70px', backgroundColor: '#2575c0', border: '2px solid #2575c0', borderRadius: '8px' }} type="button" onClick={() => { console.log(true) }}> Search </button>
               </div> }  

        </div>
    )
}



export default Feeds















