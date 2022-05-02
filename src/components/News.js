import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "news24", name: "News24" },
      author: "AFP",
      title:
        "Paralysed Kiwi great Chris Cairns opens up on pain wrought by match-fixing trials",
      description:
        "New Zealand cricket great Chris Cairns feels he can talk candidly about the pain of match-fixing allegations brought against him now that he has survived multiple health scares.",
      url: "https://www.news24.com/sport/Cricket/paralysed-kiwi-great-chris-cairns-opens-up-on-pain-wrought-by-match-fixing-trials-20220502",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/11454/2f39c30e224b48d18c3def92f303a51c.jpg",
      publishedAt: "2022-05-02T07:05:39+00:00",
      content:
        "New Zealand cricket great Chris Cairns feels he can talk candidly about the pain of match-fixing allegations brought against him now that he has survived multiple health scares.\r\nThe former all-round… [+2879 chars]",
    },
    {
      source: { id: "google-news-au", name: "Google News (Australia)" },
      author: "Sara Garcia",
      title:
        "Two men in court after stolen car involved in multiple alleged incidents throughout Adelaide",
      description:
        "Two men, one who was allegedly carrying an axe, appear in court after a stolen car was involved in multiple incidents at the weekend — including a dramatic interruption of a cricket game.",
      url: "https://www.abc.net.au/news/2022-05-02/adelaide-man-threatened-when-approaching-allegedly-stolen-car/101029934",
      urlToImage:
        "https://live-production.wcms.abc-cdn.net.au/ab0d56e5ed290022d6ad56b8185af666?impolicy=wcms_crop_resize&cropH=576&cropW=1023&xPos=0&yPos=0&width=862&height=485",
      publishedAt: "2022-05-02T01:51:16+00:00",
      content:
        "Two men, one who was allegedly carrying an axe, have appeared in court after a stolen car was involved in multiple incidents at the weekend  including a dramatic interruption of a cricket game.\r\nKey … [+2958 chars]",
    },
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: "BBC Sport",
      title: "Shane Warne memorial - watch & follow updates",
      description:
        "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
      url: "http://www.bbc.co.uk/sport/live/cricket/60916236",
      urlToImage:
        "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
      publishedAt: "2022-03-30T08:22:26.498888Z",
      content:
        "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];

  constructor() {
    super();
    console.log("hey i am constructor from news component");
    this.state = {
      status: "ok",
      totalResults: 5,
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="mytitle"
              description="mydesc"
              imageUrl="https://cdn.24.co.za/files/Cms/General/d/11454/2f39c30e224b48d18c3def92f303a51c.jpg"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="mytitle" description="mydesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
