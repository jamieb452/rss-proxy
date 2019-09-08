const {expect} = require('chai');
const testHelper = require('./test-helper');

const Parser = require('../../app/parser');

describe('developers_googleblog_com', () => {

  let document, parser;

  beforeEach(() => {
    document = testHelper.getDocumetOfHtmlFile('test/pages/developers_googleblog_com.html');
    parser = new Parser(document, testHelper.getMockConsole());
  });

  it.only('#findArticleRules works', () => {

    const rules = parser.findArticleRules();

    console.log(rules);

    expect(rules[1].rules).to.eql({
        article: 'DIV.site-wrap>ASIDE.can-stick>DIV.content>DIV.categories>DIV.category>UL.category-posts>LI',
        articleTagName: 'LI',
        title: 'DIV.post-mini>A.entry-link>H5.entry-title',
        description: 'DIV.post-mini>A.entry-link>H5.entry-title',
        link: 'DIV.post-mini>A'
      }
    );

  });

  it.skip('#findArticles works', () => {

    const articles = parser.findArticles();

    expect(articles[0]).to.eql({
      title: 'Mozilla takes action to protect users in Kazakhstan',
      link: 'https://blog.mozilla.org/blog/2019/08/21/mozilla-takes-action-to-protect-users-in-kazakhstan/',
      description: 'Today, Mozilla and Google took action to protect the online security and privacy of individuals in Kazakhstan. Together the companies deployed technical solutions within Firefox and Chrome to block the … Read more'
    });

  });

});