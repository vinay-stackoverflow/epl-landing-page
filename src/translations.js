const translations = {
  en: {
    // Nav
    nav: {
      title: 'EPL Season 8',
      langLabel: 'తెలుగు',
    },

    // Hero
    hero: {
      badge: 'EPAM Premiere League · Season 8',
      title: 'EPAM Premiere League Season 8',
      subtitle: 'The most awaited cricket tournament of the year is back!',
      date: '27th June 2026',
      location: 'VKCA, Yelahanka',
      countdownLabel: 'Registration closes · 19th June 2026, 11:59 PM',
      registerBtn: 'Register Now',
      ended: '🏏 Registration Closed · Event Started!',
      days: 'Days', hours: 'Hours', mins: 'Mins', secs: 'Secs',
    },

    // About
    about: {
      title: 'About the Event',
      p1: 'Welcome back to the EPAM Premiere League — the most awaited tournament of the year! Season 8 is here, and it\'s set to be bigger, bolder, and more exciting than ever before.',
      p2: 'The EPL Season 8 is kicking off with the most electrifying event of the year — THE AUCTION! Get ready to witness over 150 players go under the hammer, as team owners and captains battle it out to build their dream squads.',
      p3: 'Expect surprises, bidding wars, strategic picks, and nail-biting moments as the fate of players will be sealed in just a matter of seconds. Don\'t miss your chance to be part of cricket history at VKCA, Yelahanka!',
      h1: '150+ Players', p_h1: 'Watch over 150 talented players go under the hammer at the grand auction',
      h2: 'Epic Bidding Wars', p_h2: 'Team owners and captains compete fiercely to build their dream squads',
      h3: 'Season 8', p_h3: 'The most awaited edition of the EPAM Premiere League is finally here',
    },

    // Bowling banner
    banner: { label: 'EPL Season 8 · The Battle Begins' },

    // Program
    program: {
      title: 'Event Program',
      subtitle: '20th June · EPAM Bangalore Office \u00a0|\u00a0 27th & 28th June · VKCA, Yelahanka',
      imageLabel: '🏏 Season 8 · VKCA, Yelahanka',
      schedule: [
        {
          time: '20 Jun · EPAM Office',
          title: 'Player Auction — Bidding Session',
          description: 'The grand auction kicks off at the Bangalore EPAM office! Over 150 players go under the hammer as team owners and captains battle it out to build their dream squads. Expect bidding wars, strategic picks, and nail-biting moments.',
          type: 'highlight',
        },
        {
          time: '27 Jun · VKCA',
          title: 'Opening Ceremony & Season 8 Kick-off',
          description: 'A grand opening ceremony to mark the start of EPAM Premiere League Season 8 at VKCA, Yelahanka. Prepare for an unforgettable cricketing experience.',
          type: 'ceremony',
        },
        {
          time: '27 Jun · VKCA',
          title: 'Season 8 Matches — Day 1',
          description: 'The cricketing action gets underway! Teams take the field for the first matches of the season at VKCA, Yelahanka. May the best team win!',
          type: 'match',
        },
        {
          time: '28 Jun · VKCA',
          title: 'Season 8 Matches — Day 2 · Semi Finals & Final',
          description: 'The ultimate showdown! The top teams battle it out in the Semi Finals before the two best sides clash in the Grand Final. Who will lift the EPL Season 8 trophy at VKCA, Yelahanka?',
          type: 'final',
        },
      ],
      tags: { highlight: 'Auction', match: 'Match', ceremony: 'Ceremony', final: 'Final' },
    },

    // Speakers
    speakers: {
      title: 'Key Participants',
      subtitle: 'The people who make EPL Season 8 happen',
      list: [
        { name: 'Tournament Committee', title: 'Organising Team', company: 'EPAM Premiere League', bio: 'The dedicated team behind EPL Season 8, working tirelessly to make the tournament bigger and better every year.', initials: 'TC', color: '#f97316' },
        { name: 'Team Owners', title: 'Franchise Owners', company: 'EPL Season 8', bio: 'The team owners bring passion, strategy, and competitive spirit to the auction table, battling to assemble the strongest squad possible.', initials: 'TO', color: '#fbbf24' },
        { name: 'Team Captains', title: 'On-field Leaders', company: 'EPL Season 8', bio: 'Captains play a crucial role in the auction, handpicking players who fit their game plan and leading their teams to glory on the field.', initials: 'TC', color: '#fb923c' },
        { name: 'EPL Players Pool', title: '150+ Registered Players', company: 'EPAM Yelahanka', bio: 'Over 150 talented cricketers registered for Season 8, each waiting to hear their name called at the grand auction.', initials: 'PP', color: '#f59e0b' },
      ],
    },

    // Gallery
    gallery: {
      title: 'Past Seasons',
      subtitle: 'Relive the greatest moments from EPL Seasons 1–7',
      seasons: ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5', 'Season 6', 'Season 7'],
      close: 'Close',
    },

    // FAQ
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Have questions? Reach us at epltournament@epam.com',
      list: [
        { question: 'What is the EPAM Premiere League (EPL)?', answer: 'The EPAM Premiere League is an internal cricket tournament organised for EPAM employees. Season 8 is the latest and most exciting edition yet, featuring over 150 players competing across teams assembled through a live auction.' },
        { question: 'Where and when is the event taking place?', answer: 'EPL Season 8 spans three dates: the Grand Auction is on 20th June 2026, and the matches are held on 27th and 28th June 2026 at VKCA, Yelahanka.' },
        { question: 'How does the auction work?', answer: 'In the auction, over 150 registered players are put up for bidding. Team owners and captains place bids to recruit players into their squads. The highest bidder wins the player. Expect fierce competition and last-second drama!' },
        { question: 'Who can participate as a player?', answer: 'All EPAM employees are eligible to register as players for EPL Season 8. Once registered, you enter the player pool and will be available for bidding at the Grand Auction.' },
        { question: 'Who do I contact if I have questions?', answer: 'For any queries, please reach out to the tournament team at epltournament@epam.com. We are happy to help!' },
      ],
    },

    // Registration
    registration: {
      title: 'Register',
      subtitle: 'Secure your spot for EPL Season 8 — 20th, 27th & 28th June 2026',
      labelName: 'Full Name', placeholderName: 'e.g. Rahul Sharma', errorName: 'Please enter your full name.',
      labelEmail: 'Email Address', placeholderEmail: 'e.g. rahul.sharma@epam.com', errorEmail: 'Please enter your email address.', errorEmailInvalid: 'Please enter a valid email address.',
      labelRole: 'Playing Role', errorRole: 'Please select your playing role.',
      roles: ['Batsman', 'Bowler', 'All Rounder', 'Wicket Keeper'],
      submitBtn: 'Secure My Spot',
      submittingBtn: 'Submitting...',
      successIcon: '🎉',
      successTitle: "You're registered!",
      successMsg: 'Welcome to EPAM Premiere League Season 8! Auction is on 20th June, and matches are on 27th & 28th June 2026 at VKCA, Yelahanka. For any queries, contact us at',
    },

    // Footer
    footer: '© 2026 EPAM Premiere League Season 8 · For queries:',
  },

  te: {
    // Nav
    nav: {
      title: 'EPL సీజన్ 8',
      langLabel: 'English',
    },

    // Hero
    hero: {
      badge: 'EPAM ప్రీమియర్ లీగ్ · సీజన్ 8',
      title: 'EPAM ప్రీమియర్ లీగ్ సీజన్ 8',
      subtitle: 'సంవత్సరంలో అత్యంత ఆసక్తికరమైన క్రికెట్ టోర్నమెంట్ తిరిగి వచ్చింది!',
      date: '27 జూన్ 2026',
      location: 'VKCA, యలహంక',
      countdownLabel: 'నమోదు చివరి తేదీ · 19 జూన్ 2026, రాత్రి 11:59',
      registerBtn: 'ఇప్పుడే నమోదు చేయండి',
      ended: '🏏 నమోదు మూసివేయబడింది · ఈవెంట్ ప్రారంభమైంది!',
      days: 'రోజులు', hours: 'గంటలు', mins: 'నిమిషాలు', secs: 'సెకన్లు',
    },

    // About
    about: {
      title: 'ఈవెంట్ గురించి',
      p1: 'EPAM ప్రీమియర్ లీగ్‌కు స్వాగతం — సంవత్సరంలో అత్యంత ఆసక్తికరమైన టోర్నమెంట్! సీజన్ 8 వచ్చింది, మరియు ఇది గతంలో కంటే పెద్దదిగా మరియు మరింత ఉత్తేజకరంగా ఉంటుంది.',
      p2: 'EPL సీజన్ 8 అత్యంత ఉత్తేజకరమైన ఈవెంట్‌తో ప్రారంభమవుతోంది — వేలం! 150 కంటే ఎక్కువ ఆటగాళ్ళు వేలానికి సిద్ధంగా ఉన్నారు, జట్టు యజమానులు మరియు కెప్టెన్లు తమ కలల జట్టులను నిర్మించడానికి పోటీ పడతారు.',
      p3: 'ఆశ్చర్యాలు, వేల పోటీలు, వ్యూహాత్మక ఎంపికలు మరియు ఉత్కంఠభరితమైన క్షణాలను ఆశించండి. VKCA, యలహంకలో క్రికెట్ చరిత్రలో భాగంగా ఉండే అవకాశాన్ని మీరు వదులుకోకండి!',
      h1: '150+ ఆటగాళ్ళు', p_h1: 'గ్రాండ్ వేలంలో 150 కంటే ఎక్కువ ప్రతిభావంతులైన ఆటగాళ్ళను చూడండి',
      h2: 'వేల పోటీలు', p_h2: 'జట్టు యజమానులు మరియు కెప్టెన్లు తమ కలల జట్టులను నిర్మించడానికి తీవ్రంగా పోటీ పడతారు',
      h3: 'సీజన్ 8', p_h3: 'EPAM ప్రీమియర్ లీగ్ యొక్క అత్యంత ఆసక్తికరమైన సంచిక చివరికి వచ్చింది',
    },

    // Bowling banner
    banner: { label: 'EPL సీజన్ 8 · పోరాటం ప్రారంభమవుతోంది' },

    // Program
    program: {
      title: 'ఈవెంట్ కార్యక్రమం',
      subtitle: '20 జూన్ · EPAM బెంగళూరు కార్యాలయం \u00a0|\u00a0 27 & 28 జూన్ · VKCA, యలహంక',
      imageLabel: '🏏 సీజన్ 8 · VKCA, యలహంక',
      schedule: [
        {
          time: '20 జూన్ · EPAM కార్యాలయం',
          title: 'ఆటగాళ్ళ వేలం — బిడ్డింగ్ సెషన్',
          description: 'బెంగళూరు EPAM కార్యాలయంలో గ్రాండ్ వేలం ప్రారంభమవుతోంది! 150 కంటే ఎక్కువ ఆటగాళ్ళు వేలానికి వస్తారు. వేల పోటీలు, వ్యూహాత్మక ఎంపికలు మరియు ఉత్కంఠభరితమైన క్షణాలను ఆశించండి.',
          type: 'highlight',
        },
        {
          time: '27 జూన్ · VKCA',
          title: 'ప్రారంభ వేడుక & సీజన్ 8 కిక్-ఆఫ్',
          description: 'VKCA, యలహంకలో EPAM ప్రీమియర్ లీగ్ సీజన్ 8 ప్రారంభాన్ని గుర్తించే గ్రాండ్ ప్రారంభ వేడుక. మరచిపోలేని క్రికెట్ అనుభవానికి సిద్ధంగా ఉండండి.',
          type: 'ceremony',
        },
        {
          time: '27 జూన్ · VKCA',
          title: 'సీజన్ 8 మ్యాచ్‌లు — డే 1',
          description: 'క్రికెట్ ఆట ప్రారంభమవుతోంది! జట్టులు VKCA, యలహంకలో సీజన్ మొదటి మ్యాచ్‌లకు మైదానంలోకి దిగుతాయి. అత్యుత్తమ జట్టు గెలవాలని ఆశిస్తున్నాం!',
          type: 'match',
        },
        {
          time: '28 జూన్ · VKCA',
          title: 'సీజన్ 8 మ్యాచ్‌లు — డే 2 · సెమీ ఫైనల్స్ & ఫైనల్',
          description: 'అంతిమ పోరాటం! టాప్ జట్టులు సెమీ ఫైనల్స్‌లో పోటీ పడి, తర్వాత గ్రాండ్ ఫైనల్‌లో తలపడతాయి. VKCA, యలహంకలో EPL సీజన్ 8 ట్రోఫీని ఎవరు అందుకుంటారు?',
          type: 'final',
        },
      ],
      tags: { highlight: 'వేలం', match: 'మ్యాచ్', ceremony: 'వేడుక', final: 'ఫైనల్' },
    },

    // Speakers
    speakers: {
      title: 'ముఖ్య పాల్గొనేవారు',
      subtitle: 'EPL సీజన్ 8ని నిర్వహించే వ్యక్తులు',
      list: [
        { name: 'టోర్నమెంట్ కమిటీ', title: 'నిర్వాహక బృందం', company: 'EPAM ప్రీమియర్ లీగ్', bio: 'EPL సీజన్ 8 వెనుక ఉన్న అంకితమైన బృందం, టోర్నమెంట్‌ను ప్రతి సంవత్సరం మరింత గొప్పగా చేయడానికి అవిశ్రాంతంగా పనిచేస్తోంది.', initials: 'TC', color: '#f97316' },
        { name: 'జట్టు యజమానులు', title: 'ఫ్రాంచైజీ యజమానులు', company: 'EPL సీజన్ 8', bio: 'జట్టు యజమానులు అభిరుచి, వ్యూహం మరియు పోటీ స్ఫూర్తిని వేల బల్లకు తీసుకొస్తారు, బలమైన జట్టును నిర్మించడానికి పోటీ పడతారు.', initials: 'TO', color: '#fbbf24' },
        { name: 'జట్టు కెప్టెన్లు', title: 'మైదాన నాయకులు', company: 'EPL సీజన్ 8', bio: 'కెప్టెన్లు వేలంలో కీలక పాత్ర పోషిస్తారు, తమ ఆట ప్రణాళికకు సరిపోయే ఆటగాళ్ళను ఎంచుకుని మైదానంలో జట్టును విజయం వైపు నడిపిస్తారు.', initials: 'TC', color: '#fb923c' },
        { name: 'EPL ఆటగాళ్ళ జాబితా', title: '150+ నమోదైన ఆటగాళ్ళు', company: 'EPAM యలహంక', bio: 'సీజన్ 8 కోసం 150 కంటే ఎక్కువ ప్రతిభావంతులైన క్రికెటర్లు నమోదు చేసుకున్నారు, గ్రాండ్ వేలంలో తమ పేరు పిలవబడాలని ఎదురుచూస్తున్నారు.', initials: 'PP', color: '#f59e0b' },
      ],
    },

    // Gallery
    gallery: {
      title: 'గత సీజన్లు',
      subtitle: 'EPL సీజన్లు 1–7 నుండి అత్యుత్తమ క్షణాలను మళ్ళీ అనుభవించండి',
      seasons: ['సీజన్ 1', 'సీజన్ 2', 'సీజన్ 3', 'సీజన్ 4', 'సీజన్ 5', 'సీజన్ 6', 'సీజన్ 7'],
      close: 'మూసివేయి',
    },

    // FAQ
    faq: {
      title: 'తరచుగా అడిగే ప్రశ్నలు',
      subtitle: 'ప్రశ్నలు ఉన్నాయా? epltournament@epam.com కి సంప్రదించండి',
      list: [
        { question: 'EPAM ప్రీమియర్ లీగ్ (EPL) అంటే ఏమిటి?', answer: 'EPAM ప్రీమియర్ లీగ్ అనేది EPAM ఉద్యోగుల కోసం నిర్వహించబడే అంతర్గత క్రికెట్ టోర్నమెంట్. సీజన్ 8 అత్యంత ఉత్తేజకరమైన సంచిక, ఇందులో 150 కంటే ఎక్కువ ఆటగాళ్ళు లైవ్ వేలం ద్వారా ఏర్పాటైన జట్టులలో పోటీ పడతారు.' },
        { question: 'ఈవెంట్ ఎక్కడ మరియు ఎప్పుడు జరుగుతుంది?', answer: 'EPL సీజన్ 8 మూడు తేదీలలో జరుగుతుంది: గ్రాండ్ వేలం 20 జూన్ 2026న, మరియు మ్యాచ్‌లు 27 మరియు 28 జూన్ 2026న VKCA, యలహంకలో జరుగుతాయి.' },
        { question: 'వేలం ఎలా పని చేస్తుంది?', answer: 'వేలంలో, 150 కంటే ఎక్కువ నమోదైన ఆటగాళ్ళు బిడ్డింగ్‌కు పెట్టబడతారు. జట్టు యజమానులు మరియు కెప్టెన్లు తమ జట్టులోకి ఆటగాళ్ళను చేర్చుకోవడానికి బిడ్‌లు వేస్తారు. అత్యధిక బిడ్ వేసిన వ్యక్తి ఆటగాడిని గెలుచుకుంటారు.' },
        { question: 'ఆటగాడిగా ఎవరు పాల్గొనవచ్చు?', answer: 'అన్ని EPAM ఉద్యోగులు EPL సీజన్ 8లో ఆటగాళ్ళుగా నమోదు చేసుకోవడానికి అర్హులు. నమోదు చేసుకున్న తర్వాత, మీరు ఆటగాళ్ళ జాబితాలో చేరతారు మరియు గ్రాండ్ వేలంలో బిడ్డింగ్‌కు అందుబాటులో ఉంటారు.' },
        { question: 'నాకు ప్రశ్నలు ఉంటే నేను ఎవరిని సంప్రదించాలి?', answer: 'ఏదైనా సందేహాల కోసం, దయచేసి epltournament@epam.com వద్ద టోర్నమెంట్ బృందాన్ని సంప్రదించండి. మేము సహాయం చేయడానికి సంతోషంగా ఉంటాము!' },
      ],
    },

    // Registration
    registration: {
      title: 'నమోదు చేయండి',
      subtitle: 'EPL సీజన్ 8 కోసం మీ స్థానాన్ని నిరోధించండి — 20, 27 & 28 జూన్ 2026',
      labelName: 'పూర్తి పేరు', placeholderName: 'ఉదా: రాహుల్ శర్మ', errorName: 'దయచేసి మీ పూర్తి పేరు నమోదు చేయండి.',
      labelEmail: 'ఈమెయిల్ చిరునామా', placeholderEmail: 'ఉదా: rahul.sharma@epam.com', errorEmail: 'దయచేసి మీ ఈమెయిల్ చిరునామా నమోదు చేయండి.', errorEmailInvalid: 'దయచేసి చెల్లుబాటు అయ్యే ఈమెయిల్ చిరునామా నమోదు చేయండి.',
      labelRole: 'ఆట పాత్ర', errorRole: 'దయచేసి మీ ఆట పాత్రను ఎంచుకోండి.',
      roles: ['బ్యాట్స్‌మన్', 'బౌలర్', 'ఆల్ రౌండర్', 'వికెట్ కీపర్'],
      submitBtn: 'నా స్థానాన్ని నిరోధించండి',
      submittingBtn: 'సమర్పిస్తోంది...',
      successIcon: '🎉',
      successTitle: 'మీరు నమోదు చేసుకున్నారు!',
      successMsg: 'EPAM ప్రీమియర్ లీగ్ సీజన్ 8కు స్వాగతం! వేలం 20 జూన్‌న, మ్యాచ్‌లు 27 & 28 జూన్ 2026న VKCA, యలహంకలో జరుగుతాయి. ఏదైనా సందేహాల కోసం సంప్రదించండి',
    },

    // Footer
    footer: '© 2026 EPAM ప్రీమియర్ లీగ్ సీజన్ 8 · సందేహాల కోసం:',
  },

  hi: {
    nav: { title: 'EPL सीज़न 8', langLabel: 'हिन्दी' },
    hero: {
      badge: 'EPAM प्रीमियर लीग · सीज़न 8',
      title: 'EPAM प्रीमियर लीग सीज़न 8',
      subtitle: 'साल का सबसे प्रतीक्षित क्रिकेट टूर्नामेंट वापस आ गया है!',
      date: '27 जून 2026',
      location: 'VKCA, येलहंका',
      countdownLabel: 'पंजीकरण बंद होगा · 19 जून 2026, रात 11:59',
      registerBtn: 'अभी पंजीकरण करें',
      ended: '🏏 पंजीकरण बंद · इवेंट शुरू हो गया!',
      days: 'दिन', hours: 'घंटे', mins: 'मिनट', secs: 'सेकंड',
    },
    about: {
      title: 'इवेंट के बारे में',
      p1: 'EPAM प्रीमियर लीग में आपका स्वागत है — साल का सबसे प्रतीक्षित टूर्नामेंट! सीज़न 8 आ गया है, और यह पहले से कहीं ज़्यादा बड़ा और रोमांचक होने वाला है।',
      p2: 'EPL सीज़न 8 इस साल के सबसे रोमांचक इवेंट — नीलामी के साथ शुरू हो रहा है! 150 से अधिक खिलाड़ियों की बोली लगाई जाएगी, जहाँ टीम मालिक और कप्तान अपनी ड्रीम टीम बनाने के लिए मुकाबला करेंगे।',
      p3: 'बोली की लड़ाई, रणनीतिक चुनाव और रोमांचक पलों की उम्मीद रखें। VKCA, येलहंका में क्रिकेट इतिहास का हिस्सा बनने का मौका न चूकें!',
      h1: '150+ खिलाड़ी', p_h1: 'भव्य नीलामी में 150 से अधिक प्रतिभाशाली खिलाड़ियों को देखें',
      h2: 'बोली की लड़ाई', p_h2: 'टीम मालिक और कप्तान अपनी ड्रीम टीम बनाने के लिए कड़ी प्रतिस्पर्धा करते हैं',
      h3: 'सीज़न 8', p_h3: 'EPAM प्रीमियर लीग का सबसे प्रतीक्षित संस्करण अंततः आ गया है',
    },
    banner: { label: 'EPL सीज़न 8 · लड़ाई शुरू होती है' },
    program: {
      title: 'इवेंट कार्यक्रम',
      subtitle: '20 जून · EPAM बेंगलुरु कार्यालय \u00a0|\u00a0 27 और 28 जून · VKCA, येलहंका',
      imageLabel: '🏏 सीज़न 8 · VKCA, येलहंका',
      schedule: [
        { time: '20 जून · EPAM कार्यालय', title: 'खिलाड़ी नीलामी — बोली सत्र', description: 'बेंगलुरु EPAM कार्यालय में भव्य नीलामी शुरू होती है! 150 से अधिक खिलाड़ियों की बोली लगाई जाएगी। बोली युद्ध, रणनीतिक चुनाव और रोमांचक पलों की उम्मीद रखें।', type: 'highlight' },
        { time: '27 जून · VKCA', title: 'उद्घाटन समारोह और सीज़न 8 किक-ऑफ', description: 'VKCA, येलहंका में EPAM प्रीमियर लीग सीज़न 8 की शुरुआत को चिह्नित करने वाला भव्य उद्घाटन समारोह। एक अविस्मरणीय क्रिकेट अनुभव के लिए तैयार हो जाइए।', type: 'ceremony' },
        { time: '27 जून · VKCA', title: 'सीज़न 8 मैच — दिन 1', description: 'क्रिकेट का खेल शुरू होता है! टीमें VKCA, येलहंका में सीज़न के पहले मैचों के लिए मैदान में उतरती हैं। सर्वश्रेष्ठ टीम जीते!', type: 'match' },
        { time: '28 जून · VKCA', title: 'सीज़न 8 मैच — दिन 2 · सेमी फाइनल और फाइनल', description: 'अंतिम मुकाबला! शीर्ष टीमें सेमी फाइनल में भिड़ती हैं, फिर ग्रैंड फाइनल में। VKCA, येलहंका में EPL सीज़न 8 ट्रॉफी कौन उठाएगा?', type: 'final' },
      ],
      tags: { highlight: 'नीलामी', match: 'मैच', ceremony: 'समारोह', final: 'फाइनल' },
    },
    speakers: {
      title: 'मुख्य प्रतिभागी',
      subtitle: 'वे लोग जो EPL सीज़न 8 को संभव बनाते हैं',
      list: [
        { name: 'टूर्नामेंट समिति', title: 'आयोजन दल', company: 'EPAM प्रीमियर लीग', bio: 'EPL सीज़न 8 के पीछे समर्पित दल, जो टूर्नामेंट को हर साल बेहतर बनाने के लिए अथक परिश्रम करता है।', initials: 'TC', color: '#f97316' },
        { name: 'टीम मालिक', title: 'फ्रेंचाइज़ी मालिक', company: 'EPL सीज़न 8', bio: 'टीम मालिक जुनून, रणनीति और प्रतिस्पर्धी भावना के साथ नीलामी में आते हैं, सबसे मज़बूत टीम बनाने के लिए लड़ते हैं।', initials: 'TO', color: '#fbbf24' },
        { name: 'टीम कप्तान', title: 'मैदान के नेता', company: 'EPL सीज़न 8', bio: 'कप्तान नीलामी में महत्वपूर्ण भूमिका निभाते हैं, अपनी रणनीति के अनुसार खिलाड़ियों का चुनाव करते हैं और टीम को जीत दिलाते हैं।', initials: 'TC', color: '#fb923c' },
        { name: 'EPL खिलाड़ी पूल', title: '150+ पंजीकृत खिलाड़ी', company: 'EPAM येलहंका', bio: 'सीज़न 8 के लिए 150 से अधिक प्रतिभाशाली क्रिकेटरों ने पंजीकरण कराया है, जो भव्य नीलामी में अपना नाम सुनने का इंतज़ार कर रहे हैं।', initials: 'PP', color: '#f59e0b' },
      ],
    },
    gallery: {
      title: 'पिछले सीज़न',
      subtitle: 'EPL सीज़न 1–7 के सबसे यादगार पलों को फिर से जीएं',
      seasons: ['सीज़न 1', 'सीज़न 2', 'सीज़न 3', 'सीज़न 4', 'सीज़न 5', 'सीज़न 6', 'सीज़न 7'],
      close: 'बंद करें',
    },
    faq: {
      title: 'अक्सर पूछे जाने वाले प्रश्न',
      subtitle: 'प्रश्न हैं? epltournament@epam.com पर संपर्क करें',
      list: [
        { question: 'EPAM प्रीमियर लीग (EPL) क्या है?', answer: 'EPAM प्रीमियर लीग EPAM कर्मचारियों के लिए आयोजित एक आंतरिक क्रिकेट टूर्नामेंट है। सीज़न 8 सबसे रोमांचक संस्करण है जिसमें 150 से अधिक खिलाड़ी लाइव नीलामी के माध्यम से बनी टीमों में प्रतिस्पर्धा करते हैं।' },
        { question: 'इवेंट कहाँ और कब होगा?', answer: 'EPL सीज़न 8 तीन तारीखों में होगा: ग्रैंड नीलामी 20 जून 2026 को, और मैच 27 तथा 28 जून 2026 को VKCA, येलहंका में।' },
        { question: 'नीलामी कैसे काम करती है?', answer: 'नीलामी में 150 से अधिक पंजीकृत खिलाड़ियों की बोली लगाई जाती है। टीम मालिक और कप्तान अपनी टीम में खिलाड़ियों को भर्ती करने के लिए बोली लगाते हैं। सबसे ऊंची बोली लगाने वाला खिलाड़ी को जीतता है।' },
        { question: 'खिलाड़ी के रूप में कौन भाग ले सकता है?', answer: 'सभी EPAM कर्मचारी EPL सीज़न 8 में खिलाड़ियों के रूप में पंजीकरण के पात्र हैं। पंजीकरण के बाद आप खिलाड़ी पूल में शामिल हो जाते हैं और ग्रैंड नीलामी में बोली के लिए उपलब्ध होते हैं।' },
        { question: 'प्रश्न होने पर मैं किससे संपर्क करूं?', answer: 'किसी भी प्रश्न के लिए कृपया epltournament@epam.com पर टूर्नामेंट टीम से संपर्क करें। हम सहायता करके खुश होंगे!' },
      ],
    },
    registration: {
      title: 'पंजीकरण',
      subtitle: 'EPL सीज़न 8 के लिए अपनी जगह सुरक्षित करें — 20, 27 और 28 जून 2026',
      labelName: 'पूरा नाम', placeholderName: 'जैसे: राहुल शर्मा', errorName: 'कृपया अपना पूरा नाम दर्ज करें।',
      labelEmail: 'ईमेल पता', placeholderEmail: 'जैसे: rahul.sharma@epam.com', errorEmail: 'कृपया अपना ईमेल पता दर्ज करें।', errorEmailInvalid: 'कृपया एक मान्य ईमेल पता दर्ज करें।',
      labelRole: 'खेलने की भूमिका', errorRole: 'कृपया अपनी खेलने की भूमिका चुनें।',
      roles: ['बल्लेबाज', 'गेंदबाज', 'ऑल राउंडर', 'विकेट कीपर'],
      submitBtn: 'मेरी जगह सुरक्षित करें',
      submittingBtn: 'सबमिट हो रहा है...',
      successIcon: '🎉',
      successTitle: 'आपने पंजीकरण कर लिया!',
      successMsg: 'EPAM प्रीमियर लीग सीज़न 8 में आपका स्वागत है! नीलामी 20 जून को और मैच 27 और 28 जून 2026 को VKCA, येलहंका में हैं। किसी भी प्रश्न के लिए संपर्क करें',
    },
    footer: '© 2026 EPAM प्रीमियर लीग सीज़न 8 · प्रश्नों के लिए:',
  },

  sa: {
    nav: { title: 'EPL अष्टमः सत्रः', langLabel: 'संस्कृतम्' },
    hero: {
      badge: 'EPAM प्रीमियर लीग · अष्टमः सत्रः',
      title: 'EPAM प्रीमियर लीग अष्टमः सत्रः',
      subtitle: 'वर्षस्य सर्वाधिक प्रतीक्षितः क्रिकेट-प्रतियोगिता पुनरागतः!',
      date: '२७ जून २०२६',
      location: 'VKCA, येलहङ्का',
      countdownLabel: 'नामाङ्कन-अन्तिमा तिथिः · १९ जून २०२६, रात्रिः ११:५९',
      registerBtn: 'अधुना नामाङ्कनं कुरुत',
      ended: '🏏 नामाङ्कनं बद्धम् · उत्सवः आरब्धः!',
      days: 'दिवसाः', hours: 'घण्टाः', mins: 'निमेषाः', secs: 'क्षणाः',
    },
    about: {
      title: 'उत्सवस्य विषये',
      p1: 'EPAM प्रीमियर लीगे स्वागतम् — वर्षस्य सर्वाधिक प्रतीक्षितः प्रतियोगिता! अष्टमः सत्रः समागतः, अयं पूर्वापेक्षया विशालतरः रोमाञ्चकतरश्च भविष्यति।',
      p2: 'EPL अष्टमः सत्रः वर्षस्य अत्यन्त रोमाञ्चक उत्सवेन — नीलामेन — आरभ्यते! १५० अधिकाः क्रीडकाः नीलामे स्थास्यन्ति, दलाधिपाः स्वप्नदलनिर्माणाय प्रतिस्पर्धन्ते।',
      p3: 'आश्चर्याणि, नीलाम-युद्धानि, रणनैतिक-चयनानि च प्रतीक्षध्वम्। VKCA येलहङ्कायां क्रिकेट-इतिहासस्य भागं भवितुं अवसरं मा त्यजत!',
      h1: '१५०+ क्रीडकाः', p_h1: 'भव्यनीलामे १५०+ प्रतिभाशालिनः क्रीडकान् पश्यत',
      h2: 'नीलाम-युद्धानि', p_h2: 'दलाधिपाः स्वप्नदलनिर्माणाय तीव्रं प्रतिस्पर्धन्ते',
      h3: 'अष्टमः सत्रः', p_h3: 'EPAM प्रीमियर लीगस्य सर्वाधिक प्रतीक्षितः संस्करणः अन्ततः समागतः',
    },
    banner: { label: 'EPL अष्टमः सत्रः · युद्धम् आरभते' },
    program: {
      title: 'उत्सव-कार्यक्रमः',
      subtitle: '२० जून · EPAM बेङ्गलूरु-कार्यालयः \u00a0|\u00a0 २७ & २८ जून · VKCA, येलहङ्का',
      imageLabel: '🏏 अष्टमः सत्रः · VKCA, येलहङ्का',
      schedule: [
        { time: '२० जून · EPAM कार्यालयः', title: 'क्रीडक-नीलामी — निविदा-सत्रम्', description: 'बेङ्गलूरु-EPAM-कार्यालये भव्यनीलामी आरभते! १५०+ क्रीडकाः नीलामे भविष्यन्ति। नीलाम-युद्धानि, रणनैतिक-चयनानि, रोमाञ्चकाः क्षणाश्च प्रतीक्षध्वम्।', type: 'highlight' },
        { time: '२७ जून · VKCA', title: 'उद्घाटन-समारोहः & अष्टम-सत्र-आरम्भः', description: 'VKCA येलहङ्कायाम् EPAM प्रीमियर लीग अष्टम-सत्रस्य आरम्भं सूचयन् भव्योद्घाटन-समारोहः। अविस्मरणीयस्य क्रिकेट-अनुभवस्य कृते सज्जाः भवत।', type: 'ceremony' },
        { time: '२७ जून · VKCA', title: 'अष्टम-सत्र स्पर्धाः — प्रथमदिनम्', description: 'क्रिकेट-क्रीडा आरभते! दलाः VKCA येलहङ्कायां सत्रस्य प्रथम-स्पर्धासु मैदाने अवतरन्ति। श्रेष्ठदलं जयतु!', type: 'match' },
        { time: '२८ जून · VKCA', title: 'अष्टम-सत्र स्पर्धाः — द्वितीयदिनम् · अर्धान्तिम & अन्तिमस्पर्धा', description: 'अन्तिमं युद्धम्! शीर्षदलाः अर्धान्तिम-स्पर्धायां प्रतिस्पर्धन्ते, ततः भव्यान्तिम-स्पर्धायाम्। VKCA येलहङ्कायां EPL अष्टम-सत्र-ट्रॉफीं कः प्राप्स्यति?', type: 'final' },
      ],
      tags: { highlight: 'नीलामी', match: 'स्पर्धा', ceremony: 'समारोहः', final: 'अन्तिमम्' },
    },
    speakers: {
      title: 'मुख्य-प्रतिभागिनः',
      subtitle: 'ये जनाः EPL अष्टम-सत्रं संभवं कुर्वन्ति',
      list: [
        { name: 'प्रतियोगिता-समितिः', title: 'आयोजन-दलम्', company: 'EPAM प्रीमियर लीग', bio: 'EPL अष्टम-सत्रस्य पृष्ठे समर्पितं दलम्, प्रतियोगितां प्रतिवर्षं श्रेष्ठतरां कर्तुं अनवरतं कार्यं करोति।', initials: 'TC', color: '#f97316' },
        { name: 'दल-स्वामिनः', title: 'फ्रेञ्चाइज़ी-स्वामिनः', company: 'EPL अष्टमः सत्रः', bio: 'दल-स्वामिनः उत्साहं, रणनीतिं, प्रतिस्पर्धा-स्पृहां च नीलामी-वार्तायां आनयन्ति।', initials: 'TO', color: '#fbbf24' },
        { name: 'दल-नायकाः', title: 'मैदान-नायकाः', company: 'EPL अष्टमः सत्रः', bio: 'नायकाः नीलामे महत्त्वपूर्णां भूमिकां निर्वहन्ति, स्वरणनीत्यनुसारं क्रीडकान् चित्वा दलं विजयं प्रति नयन्ति।', initials: 'TC', color: '#fb923c' },
        { name: 'EPL क्रीडक-सञ्चयः', title: '१५०+ नामाङ्कितक्रीडकाः', company: 'EPAM येलहङ्का', bio: 'अष्टम-सत्राय १५०+ प्रतिभाशालिनः क्रिकेटाः नामाङ्कनं कृतवन्तः, भव्यनीलामे स्वनाम श्रोतुमिच्छन्तः।', initials: 'PP', color: '#f59e0b' },
      ],
    },
    gallery: {
      title: 'पूर्व-सत्राणि',
      subtitle: 'EPL सत्र १–७ तः सर्वोत्तम-क्षणान् पुनः अनुभवत',
      seasons: ['प्रथमः सत्रः', 'द्वितीयः सत्रः', 'तृतीयः सत्रः', 'चतुर्थः सत्रः', 'पञ्चमः सत्रः', 'षष्ठः सत्रः', 'सप्तमः सत्रः'],
      close: 'बन्दं कुरुत',
    },
    faq: {
      title: 'प्रायः पृच्छ्यमानाः प्रश्नाः',
      subtitle: 'प्रश्नाः सन्ति? epltournament@epam.com इत्यत्र सम्पर्कं कुरुत',
      list: [
        { question: 'EPAM प्रीमियर लीग (EPL) किम् अस्ति?', answer: 'EPAM प्रीमियर लीग EPAM-कर्मचारिभ्यः आयोजिता आन्तरिका क्रिकेट-प्रतियोगिता अस्ति। अष्टमः सत्रः सर्वाधिक-रोमाञ्चकः संस्करणः, यत्र १५०+ क्रीडकाः जीवन्त-नीलामेन निर्मितेषु दलेषु प्रतिस्पर्धन्ते।' },
        { question: 'उत्सवः कुत्र कदा च भविष्यति?', answer: 'EPL अष्टमः सत्रः त्रिषु तिथिषु भविष्यति: भव्यनीलामी २० जून २०२६, स्पर्धाश्च २७ तथा २८ जून २०२६ VKCA येलहङ्कायाम्।' },
        { question: 'नीलामी कथं कार्यं करोति?', answer: 'नीलामे १५०+ नामाङ्कितक्रीडकाः निविदार्थं स्थाप्यन्ते। दल-स्वामिनः नायकाश्च स्वदलेषु क्रीडकान् भर्तुं निविदाः ददति। सर्वोच्च-निविदा-दाता क्रीडकं लभते।' },
        { question: 'क्रीडकरूपेण कः भागं ग्रहीतुं शक्नोति?', answer: 'सर्वे EPAM-कर्मचारिणः EPL अष्टम-सत्रे क्रीडकरूपेण नामाङ्कनाय अर्हाः। नामाङ्कनानन्तरं भवन्तः क्रीडक-सञ्चये प्रविशन्ति।' },
        { question: 'प्रश्नैः सह कं सम्पर्कं करोमि?', answer: 'किमपि जिज्ञासायां epltournament@epam.com इत्यत्र प्रतियोगिता-दलं सम्पर्कयत। वयं साहाय्यं कर्तुं प्रसन्नाः स्मः!' },
      ],
    },
    registration: {
      title: 'नामाङ्कनम्',
      subtitle: 'EPL अष्टम-सत्राय स्थानं सुरक्षितं कुरुत — २०, २७ & २८ जून २०२६',
      labelName: 'पूर्णं नाम', placeholderName: 'यथा: राहुलः शर्मा', errorName: 'कृपया स्वपूर्णनाम प्रविशत।',
      labelEmail: 'ईमेल-पता', placeholderEmail: 'यथा: rahul.sharma@epam.com', errorEmail: 'कृपया स्वईमेल-पतां प्रविशत।', errorEmailInvalid: 'कृपया मान्यम् ईमेल-पतां प्रविशत।',
      labelRole: 'क्रीडा-भूमिका', errorRole: 'कृपया स्वक्रीडा-भूमिकां चिनुत।',
      roles: ['बल्लेबाजः', 'गेंदबाजः', 'सर्वक्रीडकः', 'विकेट-पालकः'],
      submitBtn: 'स्थानं सुरक्षितं कुरुत',
      submittingBtn: 'प्रेषयति...',
      successIcon: '🎉',
      successTitle: 'भवान् नामाङ्कितः!',
      successMsg: 'EPAM प्रीमियर लीग अष्टम-सत्रे स्वागतम्! नीलामी २० जून्, स्पर्धाश्च २७ & २८ जून २०२६ VKCA येलहङ्कायाम्। सम्पर्काय',
    },
    footer: '© २०२६ EPAM प्रीमियर लीग अष्टमः सत्रः · जिज्ञासायाः कृते:',
  },

  kn: {
    nav: { title: 'EPL ಸೀಸನ್ 8', langLabel: 'ಕನ್ನಡ' },
    hero: {
      badge: 'EPAM ಪ್ರೀಮಿಯರ್ ಲೀಗ್ · ಸೀಸನ್ 8',
      title: 'EPAM ಪ್ರೀಮಿಯರ್ ಲೀಗ್ ಸೀಸನ್ 8',
      subtitle: 'ವರ್ಷದ ಅತ್ಯಂತ ನಿರೀಕ್ಷಿತ ಕ್ರಿಕೆಟ್ ಟೂರ್ನಮೆಂಟ್ ಮತ್ತೆ ಬಂದಿದೆ!',
      date: '27 ಜೂನ್ 2026',
      location: 'VKCA, ಯಲಹಂಕ',
      countdownLabel: 'ನೋಂದಣಿ ಮುಕ್ತಾಯ · 19 ಜೂನ್ 2026, ರಾತ್ರಿ 11:59',
      registerBtn: 'ಈಗಲೇ ನೋಂದಾಯಿಸಿ',
      ended: '🏏 ನೋಂದಣಿ ಮುಚ್ಚಲಾಗಿದೆ · ಈವೆಂಟ್ ಪ್ರಾರಂಭವಾಗಿದೆ!',
      days: 'ದಿನಗಳು', hours: 'ಗಂಟೆಗಳು', mins: 'ನಿಮಿಷಗಳು', secs: 'ಸೆಕೆಂಡುಗಳು',
    },
    about: {
      title: 'ಈವೆಂಟ್ ಬಗ್ಗೆ',
      p1: 'EPAM ಪ್ರೀಮಿಯರ್ ಲೀಗ್‌ಗೆ ಸ್ವಾಗತ — ವರ್ಷದ ಅತ್ಯಂತ ನಿರೀಕ್ಷಿತ ಟೂರ್ನಮೆಂಟ್! ಸೀಸನ್ 8 ಬಂದಿದೆ, ಮತ್ತು ಇದು ಹಿಂದಿಗಿಂತ ದೊಡ್ಡದು ಮತ್ತು ರೋಮಾಂಚಕವಾಗಿರಲಿದೆ.',
      p2: 'EPL ಸೀಸನ್ 8 ವರ್ಷದ ಅತ್ಯಂತ ರೋಮಾಂಚಕ ಈವೆಂಟ್ — ಹರಾಜಿನೊಂದಿಗೆ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ! 150ಕ್ಕೂ ಹೆಚ್ಚು ಆಟಗಾರರು ಹರಾಜಿಗೆ ಬರಲಿದ್ದಾರೆ, ತಂಡ ಮಾಲೀಕರು ಮತ್ತು ನಾಯಕರು ತಮ್ಮ ಕನಸಿನ ತಂಡವನ್ನು ನಿರ್ಮಿಸಲು ಸ್ಪರ್ಧಿಸುತ್ತಾರೆ.',
      p3: 'ಆಶ್ಚರ್ಯಗಳು, ಹರಾಜು ಸ್ಪರ್ಧೆಗಳು, ತಂತ್ರಗಾರಿಕೆಯ ಆಯ್ಕೆಗಳು ಮತ್ತು ರೋಮಾಂಚಕ ಕ್ಷಣಗಳನ್ನು ನಿರೀಕ್ಷಿಸಿ. VKCA, ಯಲಹಂಕದಲ್ಲಿ ಕ್ರಿಕೆಟ್ ಇತಿಹಾಸದ ಭಾಗವಾಗುವ ಅವಕಾಶವನ್ನು ತಪ್ಪಿಸಿಕೊಳ್ಳಬೇಡಿ!',
      h1: '150+ ಆಟಗಾರರು', p_h1: 'ಭವ್ಯ ಹರಾಜಿನಲ್ಲಿ 150ಕ್ಕೂ ಹೆಚ್ಚು ಪ್ರತಿಭಾವಂತ ಆಟಗಾರರನ್ನು ನೋಡಿ',
      h2: 'ಹರಾಜು ಸ್ಪರ್ಧೆಗಳು', p_h2: 'ತಂಡ ಮಾಲೀಕರು ಮತ್ತು ನಾಯಕರು ತಮ್ಮ ಕನಸಿನ ತಂಡ ನಿರ್ಮಿಸಲು ತೀವ್ರ ಸ್ಪರ್ಧೆ ನಡೆಸುತ್ತಾರೆ',
      h3: 'ಸೀಸನ್ 8', p_h3: 'EPAM ಪ್ರೀಮಿಯರ್ ಲೀಗ್‌ನ ಅತ್ಯಂತ ನಿರೀಕ್ಷಿತ ಆವೃತ್ತಿ ಅಂತಿಮವಾಗಿ ಬಂದಿದೆ',
    },
    banner: { label: 'EPL ಸೀಸನ್ 8 · ಯುದ್ಧ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ' },
    program: {
      title: 'ಈವೆಂಟ್ ಕಾರ್ಯಕ್ರಮ',
      subtitle: '20 ಜೂನ್ · EPAM ಬೆಂಗಳೂರು ಕಚೇರಿ \u00a0|\u00a0 27 & 28 ಜೂನ್ · VKCA, ಯಲಹಂಕ',
      imageLabel: '🏏 ಸೀಸನ್ 8 · VKCA, ಯಲಹಂಕ',
      schedule: [
        { time: '20 ಜೂನ್ · EPAM ಕಚೇರಿ', title: 'ಆಟಗಾರರ ಹರಾಜು — ಬಿಡ್ಡಿಂಗ್ ಸೆಶನ್', description: 'ಬೆಂಗಳೂರು EPAM ಕಚೇರಿಯಲ್ಲಿ ಭವ್ಯ ಹರಾಜು ಪ್ರಾರಂಭವಾಗುತ್ತದೆ! 150ಕ್ಕೂ ಹೆಚ್ಚು ಆಟಗಾರರು ಹರಾಜಿಗೆ ಬರಲಿದ್ದಾರೆ. ಹರಾಜು ಸ್ಪರ್ಧೆಗಳು, ತಂತ್ರಗಾರಿಕೆ ಮತ್ತು ರೋಮಾಂಚಕ ಕ್ಷಣಗಳನ್ನು ನಿರೀಕ್ಷಿಸಿ.', type: 'highlight' },
        { time: '27 ಜೂನ್ · VKCA', title: 'ಉದ್ಘಾಟನಾ ಸಮಾರಂಭ ಮತ್ತು ಸೀಸನ್ 8 ಕಿಕ್-ಆಫ್', description: 'VKCA, ಯಲಹಂಕದಲ್ಲಿ EPAM ಪ್ರೀಮಿಯರ್ ಲೀಗ್ ಸೀಸನ್ 8 ಪ್ರಾರಂಭವನ್ನು ಗುರುತಿಸುವ ಭವ್ಯ ಉದ್ಘಾಟನಾ ಸಮಾರಂಭ. ಮರೆಯಲಾಗದ ಕ್ರಿಕೆಟ್ ಅನುಭವಕ್ಕೆ ಸಿದ್ಧರಾಗಿ.', type: 'ceremony' },
        { time: '27 ಜೂನ್ · VKCA', title: 'ಸೀಸನ್ 8 ಪಂದ್ಯಗಳು — ದಿನ 1', description: 'ಕ್ರಿಕೆಟ್ ಕ್ರಿಯೆ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ! ತಂಡಗಳು VKCA, ಯಲಹಂಕದಲ್ಲಿ ಸೀಸನ್‌ನ ಮೊದಲ ಪಂದ್ಯಗಳಿಗೆ ಮೈದಾನಕ್ಕಿಳಿಯುತ್ತವೆ. ಅತ್ಯುತ್ತಮ ತಂಡ ಗೆಲ್ಲಲಿ!', type: 'match' },
        { time: '28 ಜೂನ್ · VKCA', title: 'ಸೀಸನ್ 8 ಪಂದ್ಯಗಳು — ದಿನ 2 · ಸೆಮಿ ಫೈನಲ್ ಮತ್ತು ಫೈನಲ್', description: 'ಅಂತಿಮ ಸ್ಪರ್ಧೆ! ಉನ್ನತ ತಂಡಗಳು ಸೆಮಿ ಫೈನಲ್‌ನಲ್ಲಿ ಸ್ಪರ್ಧಿಸಿ, ಭವ್ಯ ಫೈನಲ್‌ನಲ್ಲಿ ಎದುರಾಗುತ್ತವೆ. VKCA, ಯಲಹಂಕದಲ್ಲಿ EPL ಸೀಸನ್ 8 ಟ್ರೋಫಿ ಯಾರಿಗೆ?', type: 'final' },
      ],
      tags: { highlight: 'ಹರಾಜು', match: 'ಪಂದ್ಯ', ceremony: 'ಸಮಾರಂಭ', final: 'ಫೈನಲ್' },
    },
    speakers: {
      title: 'ಮುಖ್ಯ ಭಾಗವಹಿಸುವವರು',
      subtitle: 'EPL ಸೀಸನ್ 8 ಅನ್ನು ಸಾಧ್ಯವಾಗಿಸುವ ವ್ಯಕ್ತಿಗಳು',
      list: [
        { name: 'ಟೂರ್ನಮೆಂಟ್ ಸಮಿತಿ', title: 'ಆಯೋಜಕ ತಂಡ', company: 'EPAM ಪ್ರೀಮಿಯರ್ ಲೀಗ್', bio: 'EPL ಸೀಸನ್ 8 ಹಿಂದಿರುವ ಸಮರ್ಪಿತ ತಂಡ, ಟೂರ್ನಮೆಂಟ್ ಅನ್ನು ಪ್ರತಿ ವರ್ಷ ಉತ್ತಮಗೊಳಿಸಲು ಅವಿರತ ಶ್ರಮಿಸುತ್ತದೆ.', initials: 'TC', color: '#f97316' },
        { name: 'ತಂಡ ಮಾಲೀಕರು', title: 'ಫ್ರಾಂಚೈಸಿ ಮಾಲೀಕರು', company: 'EPL ಸೀಸನ್ 8', bio: 'ತಂಡ ಮಾಲೀಕರು ಉತ್ಸಾಹ, ತಂತ್ರ ಮತ್ತು ಸ್ಪರ್ಧಾ ಮನೋಭಾವವನ್ನು ಹರಾಜು ಮೇಜಿಗೆ ತರುತ್ತಾರೆ.', initials: 'TO', color: '#fbbf24' },
        { name: 'ತಂಡ ನಾಯಕರು', title: 'ಮೈದಾನದ ನಾಯಕರು', company: 'EPL ಸೀಸನ್ 8', bio: 'ನಾಯಕರು ಹರಾಜಿನಲ್ಲಿ ನಿರ್ಣಾಯಕ ಪಾತ್ರ ವಹಿಸುತ್ತಾರೆ, ತಮ್ಮ ಆಟದ ಯೋಜನೆಗೆ ತಕ್ಕ ಆಟಗಾರರನ್ನು ಆರಿಸಿ ತಂಡವನ್ನು ಜಯದೆಡೆ ಕೊಂಡೊಯ್ಯುತ್ತಾರೆ.', initials: 'TC', color: '#fb923c' },
        { name: 'EPL ಆಟಗಾರರ ಸಂಗ್ರಹ', title: '150+ ನೋಂದಾಯಿತ ಆಟಗಾರರು', company: 'EPAM ಯಲಹಂಕ', bio: 'ಸೀಸನ್ 8 ಗಾಗಿ 150ಕ್ಕೂ ಹೆಚ್ಚು ಪ್ರತಿಭಾವಂತ ಕ್ರಿಕೆಟರ್‌ಗಳು ನೋಂದಾಯಿಸಿದ್ದಾರೆ, ಭವ್ಯ ಹರಾಜಿನಲ್ಲಿ ತಮ್ಮ ಹೆಸರು ಕರೆಯಲ್ಪಡಲು ಕಾಯುತ್ತಿದ್ದಾರೆ.', initials: 'PP', color: '#f59e0b' },
      ],
    },
    gallery: {
      title: 'ಹಿಂದಿನ ಸೀಸನ್‌ಗಳು',
      subtitle: 'EPL ಸೀಸನ್ 1–7 ರ ಅತ್ಯುತ್ತಮ ಕ್ಷಣಗಳನ್ನು ಮತ್ತೊಮ್ಮೆ ಅನುಭವಿಸಿ',
      seasons: ['ಸೀಸನ್ 1', 'ಸೀಸನ್ 2', 'ಸೀಸನ್ 3', 'ಸೀಸನ್ 4', 'ಸೀಸನ್ 5', 'ಸೀಸನ್ 6', 'ಸೀಸನ್ 7'],
      close: 'ಮುಚ್ಚಿರಿ',
    },
    faq: {
      title: 'ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು',
      subtitle: 'ಪ್ರಶ್ನೆಗಳಿವೆಯೇ? epltournament@epam.com ಗೆ ಸಂಪರ್ಕಿಸಿ',
      list: [
        { question: 'EPAM ಪ್ರೀಮಿಯರ್ ಲೀಗ್ (EPL) ಎಂದರೇನು?', answer: 'EPAM ಪ್ರೀಮಿಯರ್ ಲೀಗ್ EPAM ಉದ್ಯೋಗಿಗಳಿಗಾಗಿ ಆಯೋಜಿಸಲಾಗುವ ಆಂತರಿಕ ಕ್ರಿಕೆಟ್ ಟೂರ್ನಮೆಂಟ್. ಸೀಸನ್ 8 ಅತ್ಯಂತ ರೋಮಾಂಚಕ ಆವೃತ್ತಿ, ಇದರಲ್ಲಿ 150ಕ್ಕೂ ಹೆಚ್ಚು ಆಟಗಾರರು ಲೈವ್ ಹರಾಜಿನ ಮೂಲಕ ರಚಿಸಿದ ತಂಡಗಳಲ್ಲಿ ಸ್ಪರ್ಧಿಸುತ್ತಾರೆ.' },
        { question: 'ಈವೆಂಟ್ ಎಲ್ಲಿ ಮತ್ತು ಯಾವಾಗ ನಡೆಯುತ್ತದೆ?', answer: 'EPL ಸೀಸನ್ 8 ಮೂರು ದಿನಾಂಕಗಳಲ್ಲಿ ನಡೆಯುತ್ತದೆ: ಭವ್ಯ ಹರಾಜು 20 ಜೂನ್ 2026, ಮತ್ತು ಪಂದ್ಯಗಳು 27 ಮತ್ತು 28 ಜೂನ್ 2026 ರಂದು VKCA, ಯಲಹಂಕದಲ್ಲಿ.' },
        { question: 'ಹರಾಜು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ?', answer: 'ಹರಾಜಿನಲ್ಲಿ, 150ಕ್ಕೂ ಹೆಚ್ಚು ನೋಂದಾಯಿತ ಆಟಗಾರರನ್ನು ಬಿಡ್ಡಿಂಗ್‌ಗೆ ಇಡಲಾಗುತ್ತದೆ. ತಂಡ ಮಾಲೀಕರು ಮತ್ತು ನಾಯಕರು ಆಟಗಾರರನ್ನು ತಮ್ಮ ತಂಡಕ್ಕೆ ಸೇರಿಸಿಕೊಳ್ಳಲು ಬಿಡ್ ಮಾಡುತ್ತಾರೆ. ಅತ್ಯಧಿಕ ಬಿಡ್ ಮಾಡಿದವರು ಆಟಗಾರರನ್ನು ಗೆಲ್ಲುತ್ತಾರೆ.' },
        { question: 'ಆಟಗಾರರಾಗಿ ಯಾರು ಭಾಗವಹಿಸಬಹುದು?', answer: 'ಎಲ್ಲ EPAM ಉದ್ಯೋಗಿಗಳು EPL ಸೀಸನ್ 8 ರಲ್ಲಿ ಆಟಗಾರರಾಗಿ ನೋಂದಾಯಿಸಲು ಅರ್ಹರು. ನೋಂದಣಿ ನಂತರ, ನೀವು ಆಟಗಾರರ ಸಂಗ್ರಹದಲ್ಲಿ ಸೇರುತ್ತೀರಿ ಮತ್ತು ಭವ್ಯ ಹರಾಜಿನಲ್ಲಿ ಬಿಡ್ಡಿಂಗ್‌ಗೆ ಲಭ್ಯವಿರುತ್ತೀರಿ.' },
        { question: 'ಪ್ರಶ್ನೆಗಳಿದ್ದರೆ ಯಾರನ್ನು ಸಂಪರ್ಕಿಸಬೇಕು?', answer: 'ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿಗಾಗಿ, ದಯವಿಟ್ಟು epltournament@epam.com ನಲ್ಲಿ ಟೂರ್ನಮೆಂಟ್ ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಿ. ನಾವು ಸಹಾಯ ಮಾಡಲು ಸಂತೋಷಪಡುತ್ತೇವೆ!' },
      ],
    },
    registration: {
      title: 'ನೋಂದಣಿ',
      subtitle: 'EPL ಸೀಸನ್ 8 ಗಾಗಿ ನಿಮ್ಮ ಸ್ಥಾನ ಸುರಕ್ಷಿತಪಡಿಸಿ — 20, 27 & 28 ಜೂನ್ 2026',
      labelName: 'ಪೂರ್ಣ ಹೆಸರು', placeholderName: 'ಉದಾ: ರಾಹುಲ್ ಶರ್ಮಾ', errorName: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು ನಮೂದಿಸಿ.',
      labelEmail: 'ಇಮೇಲ್ ವಿಳಾಸ', placeholderEmail: 'ಉದಾ: rahul.sharma@epam.com', errorEmail: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸ ನಮೂದಿಸಿ.', errorEmailInvalid: 'ದಯವಿಟ್ಟು ಮಾನ್ಯ ಇಮೇಲ್ ವಿಳಾಸ ನಮೂದಿಸಿ.',
      labelRole: 'ಆಟದ ಪಾತ್ರ', errorRole: 'ದಯವಿಟ್ಟು ನಿಮ್ಮ ಆಟದ ಪಾತ್ರ ಆಯ್ಕೆಮಾಡಿ.',
      roles: ['ಬ್ಯಾಟ್ಸ್‌ಮನ್', 'ಬೌಲರ್', 'ಆಲ್ ರೌಂಡರ್', 'ವಿಕೆಟ್ ಕೀಪರ್'],
      submitBtn: 'ನನ್ನ ಸ್ಥಾನ ಸುರಕ್ಷಿತಪಡಿಸಿ',
      submittingBtn: 'ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...',
      successIcon: '🎉',
      successTitle: 'ನೀವು ನೋಂದಾಯಿಸಿದ್ದೀರಿ!',
      successMsg: 'EPAM ಪ್ರೀಮಿಯರ್ ಲೀಗ್ ಸೀಸನ್ 8 ಗೆ ಸ್ವಾಗತ! ಹರಾಜು 20 ಜೂನ್, ಮತ್ತು ಪಂದ್ಯಗಳು 27 & 28 ಜೂನ್ 2026 ರಂದು VKCA, ಯಲಹಂಕದಲ್ಲಿ. ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿಗಾಗಿ ಸಂಪರ್ಕಿಸಿ',
    },
    footer: '© 2026 EPAM ಪ್ರೀಮಿಯರ್ ಲೀಗ್ ಸೀಸನ್ 8 · ಪ್ರಶ್ನೆಗಳಿಗಾಗಿ:',
  },
}

export default translations
