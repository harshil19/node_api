const users = [
  {
    id: 1,
    description: "South Florida's Best Meetups on Youtube",
    url: 'https://www.youtube.com/bocajs',
    types: ['tutorial'],
    topics: ['js', 'html'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 2,
    description: "BocaJS - South Florida's Largest Developer Meetup",
    url: 'https://Meetup.com/bocajs',
    types: ['meeting'],
    topics: ['js', 'html'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 3,
    description: 'Palm Beach Javascript',
    url: 'https://www.youtube.com/palm-beach-js',
    types: ['meeting'],
    topics: ['js', 'html'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 4,
    description: '35 Useful CSS3 Tutorials To Boost Your Skills',
    url: 'http://www.tripwiremagazine.com/2012/06/css3-tutorials.html',
    types: ['tutorial'],
    topics: ['html', 'css'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 5,
    description:
            '5 more ways to start learning how to code right now for free',
    url: 'http://thenextweb.com/dd/2012/02/02/5-more-ways-to-start-learning-how-to-code-right-now-for-free',
    types: ['reference', 'blog post'],
    topics: ['learn to code', 'computer science', 'general programming'],
    levels: ['beginner']
  },
  {
    id: 6,
    description:
            '5 Ways To Learn Code From The Comfort Of Your Own Browser',
    url: 'http://techcrunch.com/2012/08/21/5-ways-to-learn-code-from-the-comfort-of-your-own-browser',
    types: ['reference', 'blog post'],
    topics: ['learn to code'],
    levels: ['beginner']
  },
  {
    id: 7,
    description: 'Academy RPA UiPath',
    url: 'https://academy.uipath.com/learn/course/external/view/elearning/638/RPAStarterTraining?utm_source=girls-who-code&utm_medium=link&utm_campaign=ET19ACD&utm_term=womenwhocode',
    types: ['interactive course'],
    topics: ['general programming', 'computer science', 'learn to code'],
    levels: ['beginner']
  },
  {
    id: 8,
    description: "Also, Why I'm learning to code",
    url: 'http://also.roybahat.com/post/11574823708/why-im-learning-to-code',
    types: ['reference', 'blog post'],
    topics: ['learn to code'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 9,
    description: 'Alternate Java Programming Style Guide from JavaRanch',
    url: 'http://www.javaranch.com/style.jsp',
    types: ['style guide'],
    topics: ['java'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 10,
    description: 'Apple Human Interface Guidelines',
    url: 'https://developer.apple.com/design/resources',
    types: ['article', 'book'],
    topics: ['iOS App Development'],
    levels: ['intermediate']
  },
  {
    id: 11,
    description: 'Atlassian Git Tutorials',
    url: 'https://www.atlassian.com/git',
    types: ['tutorial'],
    topics: ['git'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 12,
    description: 'Automate the Boring Stuff with Python',
    url: 'https://automatetheboringstuff.com',
    types: ['tutorial'],
    topics: ['python'],
    levels: ['beginner']
  },
  {
    id: 13,
    description: 'AWS Events & Webinars',
    url: 'https://aws.amazon.com/about-aws/events',
    types: ['reference'],
    topics: ['aws', 'cloud'],
    levels: ['beginner']
  },
  {
    id: 14,
    description:
            "AWS Loft Talk An Engineer's Tour of the Internet of Things (Sep 2015 video)",
    url: 'https://www.youtube.com/watch?v=yElH0mGzEkE',
    types: ['video'],
    topics: ['iot'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 15,
    description: "Babel's ECMAScript 6 tutorial",
    url: 'http://babeljs.io/docs/learn-es2015',
    types: ['tutorial'],
    topics: ['javascript'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 16,
    description: 'Bug Bounties 101 - Getting Started',
    url: 'https://fin1te.net/articles/bug-bounties-101-getting-started',
    types: ['guide', 'reference'],
    topics: ['security', 'bug'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 17,
    description: 'Bugcrowd blog - for bug bounty community',
    url: 'https://blog.bugcrowd.com',
    types: ['blog'],
    topics: ['security', 'bug'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 18,
    description:
            'Build Cross Browser Extensions in Minutes - Crossrider.com',
    url: 'https://crossrider.com',
    types: ['product'],
    topics: ['html', 'css'],
    levels: ['intermediate', 'advanced']
  },
  {
    id: 19,
    description: 'BuildingWebApps.com',
    url: 'http://www.buildingwebapps.com',
    types: ['tutorial', 'reference'],
    topics: ['html', 'css', 'ruby'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 20,
    description: 'BuildItSecure.ly',
    url: 'https://builditsecure.ly/#resources',
    types: ['guide', 'reference'],
    topics: ['iot'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 21,
    description:
            'BuildItSecure.ly - talk introducing initiative - initiative mentioned at 37:36',
    url: 'https://www.youtube.com/watch?v=WHdU4LutBGU&feature=youtu.be',
    types: ['video'],
    topics: ['iot'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 22,
    description: 'BYTE: A Special issue on Smalltalk',
    url: 'https://archive.org/details/byte-magazine-1981-08',
    types: ['reference'],
    topics: ['smalltalk'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 23,
    description: 'C/C++ Reference',
    url: 'http://en.cppreference.com/w',
    types: ['reference'],
    topics: ['c++'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 24,
    description: 'Code academy',
    url: 'http://www.codecademy.com/en/tracks/javascript',
    types: ['tutorial'],
    topics: ['javascript'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 25,
    description: 'Codecademy',
    url: 'https://www.codecademy.com',
    types: ['lab', 'interactive course', 'tutorial'],
    topics: [
      'rails',
      'sql',
      'angularjs',
      'python',
      'php',
      'java',
      'html',
      'css',
      'javascript',
      'git',
      'ruby'
    ],
    levels: ['beginner']
  },
  {
    id: 26,
    description: 'Codecademy.com',
    url: 'https://www.codecademy.com/#!/exercise/0',
    types: ['school', 'training'],
    topics: ['schools'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 27,
    description: 'Codecademy is now teaching Python!',
    url: 'https://www.codecademy.com/learn/python',
    types: ['tutorial'],
    topics: ['python'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 28,
    description: 'Codecademy - Ruby',
    url: 'https://www.codecademy.com/learn/ruby',
    types: ['tutorial'],
    topics: ['ruby'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 29,
    description: 'Codecademy - Ruby Track',
    url: 'https://www.codecademy.com/tracks/ruby',
    types: ['interactive course', 'tutorial'],
    topics: ['ruby', 'learn to code'],
    levels: ['intermediate', 'beginner']
  },
  {
    id: 30,
    description: "Codecademy's Learn SQL",
    url: 'https://www.codecademy.com/learn/learn-sql',
    types: ['tutorial'],
    topics: ['sql'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 31,
    description: 'CodeEval - Evaluations Made Easy',
    url: 'https://www.codeeval.com',
    types: ['help forum'],
    topics: ['misc'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 32,
    description: 'CodeMentor.io Go Tutorial',
    url: 'https://www.codementor.io/go',
    types: ['video', 'tutorial'],
    topics: ['Go'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 33,
    description: 'CodePath iOS Guides',
    url: 'http://guides.codepath.com/ios',
    types: ['tutorial'],
    topics: ['iOS'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 34,
    description: 'CodePath iOS Guides for Designers',
    url: 'http://guides.codepath.com/ios/Designer-Guides',
    types: ['tutorial'],
    topics: ['iOS'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 35,
    description: 'CodePath YouTube playlists',
    url: 'https://www.youtube.com/channel/UCvrvJyrx7ebh02wuOId11HA/playlists',
    types: ['video'],
    topics: ['iOS'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 36,
    description: 'CodePen - scope out cool ideas for html/css/js projects',
    url: 'http://codepen.io',
    types: ['code projects'],
    topics: ['javascript'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 37,
    description: 'Coder Projects',
    url: 'http://googlecreativelab.github.io/coder-projects',
    types: ['code projects'],
    topics: ['general programming'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 38,
    description: 'Code School',
    url: 'https://www.codeschool.com',
    types: ['podcast', 'video', 'tutorial'],
    topics: [
      'objective-c',
      'rails',
      'sql',
      'iOS',
      'html',
      'css',
      'javascript',
      'git',
      'ruby'
    ],
    levels: ['advanced', 'intermediate', 'beginner']
  },
  {
    id: 39,
    description: 'Code School - Discover Chrome DevTools',
    url: 'http://discover-devtools.codeschool.com',
    types: ['tools'],
    topics: ['misc'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 40,
    description: 'Code School: Rails for Zombies',
    url: 'http://railsforzombies.org',
    types: ['tutorial', 'video'],
    topics: ['ruby'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 41,
    description: "Code School's Try Objective-C",
    url: 'https://www.codeschool.com/courses/try-objective-c',
    types: ['tutorial'],
    topics: ['iOS'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 42,
    description: 'Code School - Try Git (in-browser)',
    url: 'https://try.github.io/levels/1/challenges/1',
    types: ['interactive', 'practice'],
    topics: ['git'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 43,
    description: 'Code School - Try R',
    url: 'https://www.codeschool.com/courses/try-r',
    types: ['tutorial'],
    topics: ['data'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 44,
    description: 'CodingBat Java practice problems',
    url: 'http://codingbat.com/java',
    types: ['quiz', 'tutorial', 'practice problems'],
    topics: ['java'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 45,
    description: 'CodingBat Python practice problems',
    url: 'http://codingbat.com/python',
    types: ['practice problems'],
    topics: ['python'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 46,
    description:
            'Collaborating to Win -- presentation on Collaborative CTF Infrastructure (video)',
    url: 'https://www.youtube.com/watch?v=6X3xSsoqoFw',
    types: ['video'],
    topics: ['security', 'ctf'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 47,
    description: 'Collaborating to Win -- write up of talk with links',
    url: 'http://lockboxx.blogspot.com/2015/11/cooperative-infrastructure-for-security.html',
    types: ['reference'],
    topics: ['security', 'ctf'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 48,
    description: 'Computer Programming using GNU Smalltalk',
    url: 'http://www.canol.info/books/computer_programming_using_gnu_smalltalk',
    types: ['book'],
    topics: ['smalltalk'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 49,
    description: 'Computer Science: Free Courses',
    url: 'http://www.openculture.com/computer_science_free_courses',
    types: ['reference'],
    topics: ['learn to code', 'computer science', 'general programming'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 50,
    description: 'Coursera Python',
    url: 'https://www.coursera.org/course/interactivepython1',
    types: ['tutorial'],
    topics: ['python'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 51,
    description:
            "Coursera - The Data Scientist’s Toolbox (John Hopkin's University)",
    url: 'https://www.coursera.org/learn/data-scientists-tools',
    types: ['tutorial'],
    topics: ['data'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 52,
    description: 'Cracking the Coding Interview',
    url: 'http://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/098478280X',
    types: ['book'],
    topics: ['general programming', 'inteview'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 53,
    description: 'CSS Diner: Select the Plates',
    url: 'http://flukeout.github.io',
    types: ['game', 'interactive course'],
    topics: ['css'],
    levels: ['intermediate']
  },
  {
    id: 54,
    description: 'CSS Grids and Flexbox for Responsive Web Design',
    url: 'https://frontendmasters.com/courses/css-grids-flexbox',
    types: ['video', 'tutorial'],
    topics: ['css'],
    levels: ['beginner']
  },
  {
    id: 55,
    description: 'CSS Selectors',
    url: 'http://benhowdle.im/cssselectors',
    types: ['reference'],
    topics: ['css'],
    levels: ['intermediate']
  },
  {
    id: 56,
    description: 'CTF Field Guide',
    url: 'http://trailofbits.github.io/ctf/index.html',
    types: ['guide', 'reference'],
    topics: ['security', 'ctf'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 57,
    description: 'ctftime.org',
    url: 'https://ctftime.org',
    types: ['challenges'],
    topics: ['security', 'ctf'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 58,
    description: 'Dash: General Assembly',
    url: 'https://dash.generalassemb.ly',
    types: ['lab', 'interactive course', 'tutorial'],
    topics: ['html', 'css', 'javascript'],
    levels: ['beginner']
  },
  {
    id: 59,
    description: 'Deep JavaScript Foundations',
    url: 'https://frontendmasters.com/courses/deep-javascript-v3',
    types: ['video', 'tutorial'],
    topics: ['javascript'],
    levels: ['intermediate']
  },
  {
    id: 60,
    description: 'DesignCode',
    url: 'https://designcode.io',
    types: ['video reference tutorial'],
    topics: [
      'Xcode vue AdobeXD Sketch mobile app development React swift iOS'
    ],
    levels: ['intermediate']
  },
  {
    id: 61,
    description: 'Developing Apps for iOS (SD)',
    url: 'https://itunes.apple.com/itunes-u/developing-apps-for-ios-sd/id395631522',
    types: ['podcast', 'video', 'tutorial'],
    topics: ['iOS'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 62,
    description: 'Developing iOS 7 Apps with Objective-C',
    url: 'https://itunes.apple.com/us/course/developing-ios-7-apps-for/id733644550',
    types: ['podcast', 'tutorial'],
    topics: ['iOS'],
    levels: ['intermediate', 'advanced']
  },
  {
    id: 63,
    description: 'Developing iOS 8 Apps with Swift',
    url: 'https://itunes.apple.com/us/course/developing-ios-8-apps-swift/id961180099',
    types: ['podcast', 'tutorial'],
    topics: ['iOS', 'swift'],
    levels: ['intermediate', 'advanced']
  },
  {
    id: 64,
    description:
            'Eclipse.org - IoT - includes Connected Greenhouse tutorial (uses Java language)',
    url: 'http://iot.eclipse.org/getting-started',
    types: ['tutorial'],
    topics: ['iot'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 65,
    description:
            'edX - Big Data in Education (Teachers College | Columbia University)',
    url: 'https://www.edx.org/course/big-data-education-teacherscollegex-bde1x',
    types: ['tutorial'],
    topics: ['data'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 66,
    description: 'edX - Explore statistics with R',
    url: 'https://www.edx.org/course/explore-statistics-r-kix-kiexplorx-0',
    types: ['tutorial'],
    topics: ['data'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 67,
    description: 'Effective Go',
    url: 'https://golang.org/doc/effective_go.html',
    types: ['tutorial', 'book'],
    topics: ['Go'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 68,
    description: 'Eloquent JavaScript',
    url: 'http://eloquentjavascript.net',
    types: ['book'],
    topics: ['javascript'],
    levels: ['intermediate', 'beginner']
  },
  {
    id: 69,
    description: 'Embedded Device Hacking Blog',
    url: 'http://www.devttys0.com/blog',
    types: ['blog'],
    topics: ['security', 'bug'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 70,
    description: 'Enjoy CSS.com',
    url: 'http://enjoycss.com',
    types: ['lab', 'interactive course'],
    topics: ['css'],
    levels: ['intermediate']
  },
  {
    id: 71,
    description: 'Exercism',
    url: 'http://www.exercism.io',
    types: ['quiz', 'tutorial', 'practice problems'],
    topics: ['general programming'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 72,
    description: 'Flatiron iOS pre-work',
    url: 'https://learn.co/signup',
    types: ['tutorial'],
    topics: ['iOS'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 73,
    description: 'Free Code Camp',
    url: 'http://www.freecodecamp.com',
    types: ['code projects'],
    topics: ['javascript'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 74,
    description: 'Full Stack Python',
    url: 'https://www.fullstackpython.com',
    types: ['tutorial'],
    topics: ['python'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 75,
    description: 'Getting Started in Information Security (Reddit wiki)',
    url: 'https://www.reddit.com/r/netsec/wiki/start',
    types: ['reference', 'blog post'],
    topics: ['security'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 76,
    description: 'Git for Non-Developers',
    url: 'http://anitacheng.com/git-for-non-developers',
    types: ['tutorial'],
    topics: ['git'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 77,
    description: 'GitHub - Git Cheat Sheet (pdf)',
    url: 'https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf',
    types: ['cheatsheet'],
    topics: ['git'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 78,
    description: 'Git-it - intro Git/Github tutorial',
    url: 'https://github.com/jlord/git-it',
    types: ['tutorial'],
    topics: ['git'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 79,
    description: "GNU Smalltalk User's Guide",
    url: 'https://www.gnu.org/software/smalltalk/manual/html_node/Tutorial.html',
    types: ['tutorial'],
    topics: ['smalltalk'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 80,
    description: 'Go Language Tour',
    url: 'http://tour.golang.org/welcome/1',
    types: ['tutorial'],
    topics: ['Go'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 81,
    description: 'Google Java Style',
    url: 'https://google.github.io/styleguide/javaguide.html',
    types: ['style guide'],
    topics: ['java'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 82,
    description: "Google's C++ Class",
    url: 'https://developers.google.com/edu/c++',
    types: ['tutorial'],
    topics: ['c++'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 83,
    description: 'Hacker Rank',
    url: 'https://www.hackerrank.com',
    types: ['tutorial', 'practice problems'],
    topics: ['javascript'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 84,
    description: 'Hacking with Swift',
    url: 'https://www.hackingwithswift.com',
    types: ['video', 'book', 'tutorial'],
    topics: ['swiftUI', 'mobile app development', 'swift', 'iOS'],
    levels: ['intermediate']
  },
  {
    id: 85,
    description: 'Head First Java',
    url: 'http://www.headfirstlabs.com/books/hfjava',
    types: ['book'],
    topics: ['java'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 86,
    description: 'HTML & CSS',
    url: 'http://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189',
    types: ['book'],
    topics: ['html', 'css'],
    levels: ['intermediate', 'beginner']
  },
  {
    id: 87,
    description:
            'InfoSec consulting companies - Ask Us Anything (2014 edition)',
    url: 'https://www.reddit.com/r/netsec/comments/202bsf/hey_guys_we_run_five_infosec_consulting_companies/?sort=old&limit=500',
    types: ['reference', 'blog post'],
    topics: ['security'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 88,
    description:
            'InfoSec consulting companies - Ask Us Anything (2015 edition)',
    url: 'https://www.reddit.com/r/netsec/comments/3k9ul8/we_run_five_infosec_consulting_companies_ask_us/?sort=qa&limit=500',
    types: ['reference', 'blog post'],
    topics: ['security'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 89,
    description: 'Install Rails',
    url: 'http://guides.railsgirls.com/install',
    types: ['tutorial'],
    topics: ['ruby'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 90,
    description: 'iOS Programming: The Big Nerd Ranch Guide (4th Edition):',
    url: 'http://www.amazon.com/iOS-Programming-Ranch-Edition-Guides/dp/0321942051',
    types: ['book'],
    topics: ['iOS'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 91,
    description: 'JavaScript Algorithms and Data Structures',
    url: 'https://github.com/trekhleb/javascript-algorithms#readme',
    types: ['reference', 'tutorial'],
    topics: ['css'],
    levels: ['intermediate']
  },
  {
    id: 92,
    description: 'Javascript and HTML5 Now - short overview of modern JS. ',
    url: 'http://www.oreilly.com/programming/free/javascript-html5-now.csp',
    types: ['book'],
    topics: ['javascript'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 93,
    description: 'JavaScript & JQuery',
    url: 'http://www.amazon.com/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647',
    types: ['book'],
    topics: ['javascript'],
    levels: ['intermediate', 'beginner']
  },
  {
    id: 94,
    description: 'Javascript The Good Parts',
    url: 'http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742',
    types: ['book'],
    topics: ['javascript'],
    levels: ['advanced', 'intermediate']
  },
  {
    id: 95,
    description: 'Khan Academy',
    url: 'https://www.khanacademy.org/computing/computer-programming/programming',
    types: ['tutorial', 'reference'],
    topics: ['javascript'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 96,
    description: "Khan Academy's Intro to SQL",
    url: 'https://www.khanacademy.org/computing/computer-programming/sql',
    types: ['tutorial'],
    topics: ['sql'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 97,
    description: 'Learn C++',
    url: 'http://www.learncpp.com',
    types: ['tutorial'],
    topics: ['c++'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 98,
    description: 'Learn C The Hard Way',
    url: 'http://c.learncodethehardway.org',
    types: ['book'],
    topics: ['c'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 99,
    description: 'Learn Git Branching',
    url: 'http://pcottle.github.io/learnGitBranching',
    types: ['tutorial'],
    topics: ['git', 'git branching'],
    levels: ['advanced', 'intermediate', 'beginner']
  },
  {
    id: 100,
    description: 'Learn Go in Y minutes',
    url: 'https://learnxinyminutes.com/docs/go',
    types: ['tutorial'],
    topics: ['Go'],
    levels: ['beginner']
  },
  {
    id: 101,
    description: 'Learning HTML: Guides and Tutorials',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
    types: ['guidelines', 'reference'],
    topics: ['html'],
    levels: ['intermediate']
  },
  {
    id: 102,
    description: 'Learning to Program in Go Video Series',
    url: 'https://www.youtube.com/playlist?list=PLei96ZX_m9sVSEXWwZi8uwd2vqCpEm4m6',
    types: ['video', 'tutorial'],
    topics: ['Go'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 103,
    description: 'Learn JavaScript Unit Testing with Mocha, Chai and Simon',
    url: 'https://www.udemy.com/learn-javascript-unit-testing-with-mocha-chai-and-sinon',
    types: ['interactive course', 'tutorial'],
    topics: ['general programming', 'javascript'],
    levels: ['advanced']
  },
  {
    id: 104,
    description: 'Learn Python with Games',
    url: 'http://www.checkio.org',
    types: ['game'],
    topics: ['python'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 105,
    description: 'Learn Ruby with the EdgeCase Ruby Koans',
    url: 'http://rubykoans.com',
    types: ['tutorial', 'book'],
    topics: ['ruby'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 106,
    description: 'Learn to code the hard way',
    url: 'http://cli.learncodethehardway.org',
    types: ['book'],
    topics: ['cli'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 107,
    description: 'Learn to Program, by Chris Pine',
    url: 'http://it-ebooks.info/book/36',
    types: ['book'],
    topics: ['ruby', 'learn to code'],
    levels: ['beginner']
  },
  {
    id: 108,
    description: 'Learn To Style HTML With CSS Tags',
    url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS',
    types: ['guidelines', 'reference', 'tutorial'],
    topics: ['css'],
    levels: ['beginner']
  },
  {
    id: 109,
    description: 'Linux Fundamentals, Part 1',
    url: 'http://www.funtoo.org/Linux_Fundamentals,_Part_1',
    types: ['tutorial'],
    topics: ['misc', 'linux'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 110,
    description: 'Madona Syombua | YouTube',
    url: 'https://www.youtube.com/channel/UCaP1Jt-D1hiZyb6bY7NSqKQ/about',
    types: ['video'],
    topics: ['mobile app development Kotlin machine learning java android'],
    levels: ['intermediate']
  },
  {
    id: 111,
    description: 'Matasano Crypto Challenges',
    url: 'http://cryptopals.com',
    types: ['hacking challenges', 'demo apps'],
    topics: ['security'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 112,
    description:
            'MIT 6.087 Practical Programming in C (taught January IAP 2010)',
    url: 'http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-087-practical-programming-in-c-january-iap-2010',
    types: ['tutorial'],
    topics: ['c', 'c++'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 113,
    description:
            'MIT 6.088 Intro to C Memory Mgmt and C++ Object-Oriented Prog. (taught January IAP 2010)',
    url: 'http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-088-introduction-to-c-memory-management-and-c-object-oriented-programming-january-iap-2010',
    types: ['tutorial'],
    topics: ['c', 'c++'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 114,
    description: 'MIT 6.096 Introduction to C++ (taught January IAP 2011)',
    url: 'http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-096-introduction-to-c-january-iap-2011',
    types: ['tutorial'],
    topics: ['c', 'c++'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 115,
    description:
            'MIT 6.S096 Effective Programming in C and C++ (taught January IAP 2014)',
    url: 'http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-s096-effective-programming-in-c-and-c-january-iap-2014',
    types: ['tutorial'],
    topics: ['c', 'c++'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 116,
    description:
            'MIT 6.S096 Introduction to C and C++ (taught January IAP 2013)',
    url: 'http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-s096-introduction-to-c-and-c-january-iap-2013',
    types: ['tutorial'],
    topics: ['c', 'c++'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 117,
    description: 'MIT OpenCourseWare',
    url: 'http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-00-introduction-to-computer-science-and-programming-fall-2008/video-lectures',
    types: ['school', 'training'],
    topics: ['schools'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 118,
    description: "Mozilla's Javascript Tutorial",
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    types: ['guide'],
    topics: ['javascript'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 119,
    description: 'Neural Networks for Machine Learning',
    url: 'https://www.coursera.org/course/neuralnets',
    types: ['reference', 'tutorial'],
    topics: ['misc', 'machine learning'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 120,
    description: 'NewCoder.io',
    url: 'http://newcoder.io',
    types: ['tutorial'],
    topics: ['python'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 121,
    description: 'Nodeschool',
    url: 'http://nodeschool.io',
    types: ['tutorial', 'reference'],
    topics: ['javascript'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 122,
    description:
            'Objective-C Programming: The Big Nerd Ranch Guide (2nd Edition):',
    url: 'http://www.amazon.com/Objective-C-Programming-Ranch-Guide-Guides/dp/032194206X/ref=sr_1_1?s=books&ie=UTF8&qid=1440459142&sr=1-1&keywords=objective+c&pebp=1440459145149&perid=0AX7W4FGDD464TBJAAYZ',
    types: ['book'],
    topics: ['iOS', 'objective c'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 123,
    description: 'One month Rails $$',
    url: 'https://onemonth.com/courses/one-month-rails',
    types: ['video', 'tutorial'],
    topics: ['ruby'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 124,
    description: 'Original Coding Style Conventions for Java from Sun',
    url: 'http://www.oracle.com/technetwork/java/codeconvtoc-136057.html',
    types: ['style guide'],
    topics: ['java'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 125,
    description: 'OverTheWire WarGames',
    url: 'http://overthewire.org/wargames',
    types: ['hacking challenges', 'demo apps'],
    topics: ['security'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 126,
    description: 'OWASP Security Shepard ',
    url: 'https://www.owasp.org/index.php/OWASP_Security_Shepherd',
    types: ['hacking challenges', 'demo apps'],
    topics: ['security'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 127,
    description: "picoCTF -- Carnegie Mellon University's CTF training app",
    url: 'https://picoctf.com',
    types: ['game'],
    topics: ['security', 'ctf'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 128,
    description: 'Pluralsight Classes for Go',
    url: 'https://www.pluralsight.com/search.html?q=golang&categories=all',
    types: ['video', 'tutorial'],
    topics: ['Go'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 129,
    description: 'Pragmatic studio Rails course $$',
    url: 'https://pragmaticstudio.com/rails',
    types: ['video', 'tutorial'],
    topics: ['ruby'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 130,
    description: 'Pro Git',
    url: 'http://git-scm.com/book/en/v2',
    types: ['book'],
    topics: ['git'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 131,
    description: 'Programr | Online IT Lab',
    url: 'http://www.programmr.com',
    types: ['lab'],
    topics: [
      'python',
      'android',
      'iOS',
      'angularjs',
      'ajax',
      'c++',
      'c#',
      'flash',
      'html',
      'css',
      'java',
      'jquery',
      'js',
      'j2ee',
      'php',
      'ruby',
      'sql'
    ],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 132,
    description: 'Project Euler',
    url: 'https://projecteuler.net',
    types: ['tutorial'],
    topics: ['algorithms'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 133,
    description: "Python Introduction - Google's Python Class",
    url: 'https://developers.google.com/edu/python/introduction?csw=1',
    types: ['tutorial'],
    topics: ['python'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 134,
    description: 'Rails Girls Guides - Rails Girls',
    url: 'http://guides.railsgirls.com',
    types: ['tutorial'],
    topics: ['ruby'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 135,
    description: 'Ray Wenderlich tutorials',
    url: 'http://www.raywenderlich.com',
    types: ['tutorial', 'video'],
    topics: ['iOS'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 136,
    description: 'React js Tutorial -How Redux Works',
    url: 'https://www.youtube.com/watch?v=1w-oQ-i1XB8&list=PLoYCgNOIyGADILc3iUJzygCqC8Tt3bRXt',
    types: ['video', 'tutorial'],
    topics: ['general programming', 'learn to code'],
    levels: ['advanced']
  },
  {
    id: 137,
    description: 'Real Python',
    url: 'https://realpython.com',
    types: ['tutorial'],
    topics: ['python'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 138,
    description: 'Ruby Best Practices - Book',
    url: 'https://practicingruby.com',
    types: ['book'],
    topics: ['ruby'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 139,
    description: '$ Ruby cheat browse ',
    url: 'http://cheat.errtheblog.com',
    types: ['reference'],
    topics: ['ruby'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 140,
    description: 'Ruby in 100 minutes - Jumpstart Lab Curriculum',
    url: 'http://tutorials.jumpstartlab.com/projects/ruby_in_100_minutes.html',
    types: ['tutorial'],
    topics: ['ruby'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 141,
    description: 'RubyMonk',
    url: 'https://rubymonk.com',
    types: ['interactive course', 'tutorial'],
    topics: ['ruby'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 142,
    description: 'Ruby.on-page.net ',
    url: 'http://ruby.on-page.net',
    types: ['tutorial'],
    topics: ['ruby'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 143,
    description: 'Ruby on Rails Guides',
    url: 'http://edgeguides.rubyonrails.org',
    types: ['guide'],
    topics: ['ruby'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 144,
    description: 'Ruby on Rails Screencasts',
    url: 'http://railscasts.com',
    types: ['video'],
    topics: ['ruby'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 145,
    description: 'Ruby on Rails Tutorial',
    url: 'http://ruby.railstutorial.org',
    types: ['book'],
    topics: ['ruby'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 146,
    description: 'Ruby Quiz',
    url: 'http://rubyquiz.com',
    types: ['quiz'],
    topics: ['ruby'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 147,
    description: 'SASS for Web Designers',
    url: 'http://www.abookapart.com/products/sass-for-web-designers',
    types: ['book'],
    topics: ['css', 'sass'],
    levels: ['intermediate', 'beginner']
  },
  {
    id: 148,
    description: 'Secure Coding Guidelines for Java SE',
    url: 'http://www.oracle.com/technetwork/java/seccodeguide-139067.html',
    types: ['guidelines'],
    topics: ['java'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 149,
    description: 'Smalltalk-72 Manual',
    url: 'http://bitsavers.informatik.uni-stuttgart.de/pdf/xerox/parc/techReports/Smalltalk-72_Instruction_Manual_Mar76.pdf',
    types: ['book'],
    topics: ['smalltalk'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 150,
    description:
            'Smalltalk: An Introduction to Application Development Using VisualWorks',
    url: 'https://books.google.co.in/books?id=zalQAAAAMAAJ&q=smalltalk&dq=smalltalk&hl=en&sa=X&ved=0CCgQ6AEwAmoVChMIw63Vo6CpyAIV0HGOCh3S2Alf',
    types: ['book'],
    topics: ['smalltalk'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 151,
    description: 'Smalltalk Cheatsheet',
    url: 'http://www.angelfire.com/tx4/cus/notes/smalltalk.html',
    types: ['cheatsheet', 'reference'],
    topics: ['smalltalk'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 152,
    description: 'Smalltalk, Objects, and Design',
    url: 'https://books.google.co.in/books?id=W8_Une9cbbgC&printsec=frontcover&dq=smalltalk&hl=en&sa=X&ved=0CCIQ6AEwAWoVChMIw63Vo6CpyAIV0HGOCh3S2Alf#v=onepage&q=smalltalk&f=false',
    types: ['book'],
    topics: ['smalltalk'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 153,
    description: "Square's Intro to D3.JS",
    url: 'http://square.github.io/intro-to-d3',
    types: ['tutorial'],
    topics: ['javascript'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 154,
    description: 'Stack Overflow',
    url: 'http://stackoverflow.com',
    types: ['help forum'],
    topics: ['misc'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 155,
    description: 'Stanford School of Engineering',
    url: 'https://see.stanford.edu',
    types: ['school', 'training'],
    topics: ['schools'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 156,
    description: 'Swift by Sundell',
    url: 'https://www.swiftbysundell.com',
    types: ['tips', 'article', 'podcast', 'video', 'tutorial'],
    topics: ['mobile app development', 'swiftUI', 'swift', 'iOS'],
    levels: ['intermediate']
  },
  {
    id: 157,
    description: 'Swift for Good',
    url: 'https://www.swiftforgood.com',
    types: ['book'],
    topics: ['iOS App Development', 'swiftUI', 'swift'],
    levels: ['beginner']
  },
  {
    id: 158,
    description: 'Teaching Kids Programming Designed',
    url: 'http://teachingkidsprogramming.org',
    types: ['tutorial', 'kids'],
    topics: ['java'],
    levels: ['beginner']
  },
  {
    id: 159,
    description: 'The Magic of CSS',
    url: 'http://adamschwartz.co/magic-of-css',
    types: ['reference', 'tutorial'],
    topics: ['css'],
    levels: ['intermediate']
  },
  {
    id: 160,
    description: 'The Missing Manual for JavaScript & JQuery',
    url: 'http://www.amazon.com/JavaScript-jQuery-The-Missing-Manual/dp/1449399029',
    types: ['book'],
    topics: ['javascript'],
    levels: ['intermediate', 'beginner']
  },
  {
    id: 161,
    description: 'The Well-Grounded Rubyist ',
    url: 'http://www.amazon.com/Well-Grounded-Rubyist-David-Black/dp/1933988657',
    types: ['book'],
    topics: ['ruby'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 162,
    description: 'Treehouse',
    url: 'https://teamtreehouse.com',
    types: ['lab', 'interactive course', 'video', 'tutorial'],
    topics: [
      'design',
      'php',
      'iOS',
      'android',
      'java',
      'c#',
      'game development',
      'databases',
      'wordpress',
      'html',
      'css',
      'javascript',
      'ruby'
    ],
    levels: ['intermediate', 'beginner']
  },
  {
    id: 163,
    description: 'Try Git',
    url: 'https://try.github.io',
    types: ['tutorial'],
    topics: ['git'],
    levels: ['beginner']
  },
  {
    id: 164,
    description: 'Tryruby.org',
    url: 'http://tryruby.org/levels/1/challenges/0',
    types: ['interactive course'],
    topics: ['ruby'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 165,
    description: 'Try SQL - Code School',
    url: 'https://www.codeschool.com/courses/try-sql',
    types: ['tutorial'],
    topics: ['sql'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 166,
    description: 'Tutorials Point',
    url: 'http://www.tutorialspoint.com/javascript',
    types: ['tutorial'],
    topics: ['javascript'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 167,
    description: 'Udemy',
    url: 'https://www.udemy.com',
    types: ['podcast', 'video', 'tutorial'],
    topics: [
      'nodejs',
      'rails',
      'python',
      'php',
      'iOS',
      'android',
      'java',
      'c#',
      'html',
      'css',
      'javascript',
      'ruby'
    ],
    levels: ['intermediate', 'beginner']
  },
  {
    id: 168,
    description: 'Udemy: Learn the Foundations of HTML',
    url: 'https://blog.udemy.com/learn-html-learn-the-foundations-of-html',
    types: ['tutorial', 'reference'],
    topics: ['html', 'css'],
    levels: ['beginner']
  },
  {
    id: 169,
    description: 'Udemy: Python Basics - Bootcamp',
    url: 'https://www.udemy.com/course/python-basics-bootcamp',
    types: ['training practice guide tutorial'],
    topics: ['python'],
    levels: ['beginner']
  },
  {
    id: 170,
    description: 'VIM Adventures',
    url: 'http://vim-adventures.com',
    types: ['game'],
    topics: ['misc', 'vim'],
    levels: ['beginner', 'intermediate', 'advanced']
  },
  {
    id: 171,
    description: 'Visualgo - Animated visualizations for algorithms',
    url: 'http://visualgo.net',
    types: ['tutorial'],
    topics: ['algorithms'],
    levels: ['beginner', 'intermediate']
  },
  {
    id: 172,
    description: 'w3schools.com',
    url: 'http://www.w3schools.com',
    types: ['reference', 'tutorial'],
    topics: ['html', 'css', 'javascript'],
    levels: ['beginner']
  },
  {
    id: 173,
    description:
            'Write SwiftUI Entirely on an iPad Using Swift Playgrounds',
    url: 'https://medium.com/better-programming/write-swiftui-entirely-on-an-ipad-using-swift-playgrounds-f48364e50c9a',
    types: ['article', 'tutorial'],
    topics: [
      'swift playgrounds',
      'ipad',
      'iOS App Development',
      'swiftUI',
      'swift',
      'iOS'
    ],
    levels: ['beginner']
  }
]

export default users
