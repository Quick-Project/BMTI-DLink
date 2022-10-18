const dataList = [
    //Quick_Project_Dummy_Data
    //SvsB Q
    [{
        id:'i',
        title:'질문 1',
        question:'당신은 술을 마실 때 달달한 술이 좋은가요?',
        ansL:'달달한 술이 좋아!',
        ansR:'술은 써야 술이지!',
        ansP:'모르겠어요 ㅠㅠ'
    },
    {
        id:'iL',
        title:'질문 2',
        question:'탄산은 누가 뭐래도 콜라가 최고?',
        ansL:'누가 뭐래도 콜라가 최고!',
        ansR:'콜라보다는 다른게 더 취향!',
        
    },{
        id:'iLL',
        title:'질문 3',
        question:'분위기 좋은 루프탑에 올라간 당신! 당신 눈에 가장 먼저 보이는 장면은?!',
        ansL:'의자에 앉아 분위기 있게 술을 마시는 신사',
        ansR:'모래사장 위 커플들의 애정행각!'
    },{
        id:'iLR',
        title:'질문 3',
        question:'레드 벨벳의 “빨간 맛"이 뉴 진스의 “Attention” 보다 더 취향이다',
        ansL:'빠빠빨간 맛! 궁금해 허니!',
        ansR:'You got me looking for attention~~'
    },{
        id:'iLLL',
        type:'S',
        point:1
    },{
        id:'iLLR',
        type:'S',
        point:2
    },{
        id:'iLRL',
        type:'S',
        point:4
    },{
        id:'iLRR',
        type:'S',
        point:3
    },
    {
        id:'iR',
        title:'질문 2',
        question:'소주를 마시는 당신! 같이 마시던 친구가 인생이 너무 써서 소주가 달다고 합니다! 당신의 반응은?!',
        ansL:'헛소리하지말고 소주나 마시라고 한다.',
        ansR:'인생의 쓴 맛이 더 쓴게 맞다고 맞장구 쳐준다.',
        
    },{
        id:'iRL',
        title:'질문 3',
        question:'당신이 운영하는 편의점에 한 학생이 도둑질을 하는 모습을 발견했다! 당신의 선택은!?',
        ansL:'인생은 실전! 현장 검거 후 경찰에 인도한다.',
        ansR:'인생의 쓴맛이 더 쓴게 맞다고 맞장구 쳐준다.'
    },{
        id:'iRR',
        title:'질문 3',
        question:'맞장구 친 대가로 당신의 친구는 완 전 히 취해버렸습니다! 친구의 허세가 심해져 갑니다! 더이상 듣기 힘들어진 당신! 당신의 선택은?!',
        ansL:'잠시 화장실 간다고 하고 친구 카드로 결제한다.',
        ansR:'너무 취한거 같다며 택시까지 태워 집으로 보낸다'
    },{
        id:'iRLL',
        type:'B',
        point:4
    },{
        id:'iRLR',
        type:'B',
        point:2
    },{
        id:'iRRL',
        type:'B',
        point:3
    },{
        id:'iRRR',
        type:'B',
        point:1
    }],
    //LvsD Q
    [{
        id:'i',
        title:'질문 4',
        question:'역시 술이라면 독해야지, 맥주는 음료수다.',
        ansL:'독하니까 술이지 안독하면 술인가!?',
        ansR:'맥주도 술이다! 맥주 좋아!',
    },
    {
        id:'iL',
        title:'질문 5',
        question:'당신에게 모든 물자를 지원할테니 두 환경 중 한 곳에서 살아남으라고 합니다. 당신의 선택은?',
        ansL:'눈보라가 휘몰아치는 설산',
        ansR:'사방이 바다인 무인도',
        
    },{
        id:'iLL',
        title:'질문 6',
        question:'당신은 혼자 영화를 보러 갔습니다. 상영하는 영화는 단 두가지! 당신은 어떤 영화가 더 취향인가요?',
        ansL:'분위기가 무거운 느와르',
        ansR:'밝고 가벼운 로맨스'
    },{
        id:'iLR',
        title:'질문 6',
        question:'당신은 여행을 떠나려고 계획을 세우고 있습니다. 여행지를 정해야하는데 어떤 여행지를 선호하나요?',
        ansL:'세련된 느낌의 고층 빌딩이 많은 도심지',
        ansR:'푸른 바다가 펼쳐진 휴양지'
    },{
        id:'iLLL',
        type:'D',
        point:4
    },{
        id:'iLLR',
        type:'D',
        point:1
    },{
        id:'iLRL',
        type:'D',
        point:3
    },{
        id:'iLRR',
        type:'D',
        point:2
    },
    {
        id:'iR',
        title:'질문 5',
        question:'회사에서 당신을 해외 파견을 보내려고 합니다. 당신은 회사에 두 보기 중 하나를 요구할 수 있습니다. 당신의 선택은?',
        ansL:'해외 파견을 취소해달라고 요구한다',
        ansR:'채류비 지원을 요구한다',
        
    },{
        id:'iRL',
        title:'질문 6',
        question:'피곤에 찌들어 버린 당신... 체력을 회복하기 위해 카페에 왔습니다. 당신이 선택할 메뉴는?',
        ansL:'카페인, 그것은 나라가 허락한 유일한 마약이지!',
        ansR:'시원하고 달달한 음료 하나면 세상 모든 것이 용서된다!'
    },{
        id:'iRR',
        title:'질문 6',
        question:'어이쿠! 당신의 전애인이 당신의 친구와 함께 있는 모습을 보았습니다! 지금 당신이 할 행동은?!',
        ansL:'당장 다른 친구에게 연락해 함께 술을 마시며 전애인의 흉을 봅니다',
        ansR:'집으로 돌아화 창밖의 풍경을 보며 혼술을 하며 밖에 지나가는 차들에 분노를 담아 보냅니다'
    },{
        id:'iRLL',
        type:'L',
        point:4
    },{
        id:'iRLR',
        type:'L',
        point:1
    },{
        id:'iRRL',
        type:'L',
        point:2
    },{
        id:'iRRR',
        type:'L',
        point:3
    }],   
    //MvsC Q 
    [{
        id:'i',
        title:'질문 7',
        question:'당신의 옷장은 어떤 가요?!',
        ansL:'다양한 색의 옷이 존재한다!',
        ansR:'Simple is Best!',
    },
    {
        id:'iL',
        title:'질문 8',
        question:'미술 시간 준비물을 사러간 당신! 어떤 준비물을 구입했나요?',
        ansL:'색은 많으면 많을 수록 좋아! 64색 물감 파레트',
        ansR:'필요한 색만 들어있으면 그만! 16색 물감 파레트',
        
    },{
        id:'iLL',
        title:'질문 9',
        question:'당신의 앞에 물이 담긴 투명한 컵이 있습니다. 이 때 당신의 눈에 처음으로 들어온 것은?',
        ansL:'유리컵 뒤로 작개 핀 무지개',
        ansR:'유리컵 표면에 맺힌 투명한 물방울'
    },{
        id:'iLR',
        title:'질문 9',
        question:'당신이 가장 좋아하는 옷 가게에서 신상이라며 두벌을 추천 해 줬습니다. 두 벌의 옷 중 당신의 취향은?',
        ansL:'푸른 바다가 프린팅 된 옷',
        ansR:'세련된 도시의 풍경이 프린팅 된 옷'
    },{
        id:'iLLL',
        type:'C',
        point:5
    },{
        id:'iLLR',
        type:'C',
        point:1
    },{
        id:'iLRL',
        type:'C',
        point:4
    },{
        id:'iLRR',
        type:'C',
        point:3
    },
    {
        id:'iR',
        title:'질문 8',
        question:'당신에게 과제가 주어졌습니다. 바로 태극기를 그려라! 당신은 어떤 순서로 그릴 건가요?',
        ansL:'건 곤 감 리 부터 그린다!',
        ansR:'태극 문양부터 그린다!',
        
    },{
        id:'iRL',
        title:'질문 9',
        question:'친구가 당신에게 소개팅을 주선해줬습니다. 긴장되는 자리..! 당신은 어떤 옷을 입으시겠습니까?',
        ansL:'세련된 스타일의 블랙 수트',
        ansR:'포인트 그림이 작게 들어간 흰색 맨투맨 코디'
    },{
        id:'iRR',
        title:'질문 9',
        question:'수학여행을 떠나야 하는 당신. 즐거운 마음에 쇼핑을 하러 나갔습니다. 마침 눈에 띄는 옷가게가 보여 들어가 옷을 샀습니다. 어떤 코디의 옷을 샀을까요?',
        ansL:'무난하고 편하게 입을 수 있는 코디',
        ansR:'SNS에 올릴 사진을 염두에 둔 화사한 코디'
    },{
        id:'iRLL',
        type:'M',
        point:3
    },{
        id:'iRLR',
        type:'M',
        point:1
    },{
        id:'iRRL',
        type:'M',
        point:2
    },{
        id:'iRRR',
        type:'C',
        point:2
    }],
    //TvsF Q
    [{
        id:'i',
        title:'질문 10',
        question:'오랜만에 문화생활을 하려는 당신! 어떤 문화 생활을 즐기고 싶은가요?',
        ansL:'오롯이 집중해서 볼 수 있는 그동안 기다려온 영화',
        ansR:'눈 앞에서 울려퍼지는 내 가수의 목소리',
    },
    {
        id:'iL',
        title:'질문 11',
        question:'잠들기 전에 당신은 책을 잠시 읽기로 했습니다. 당신의 손에 들린 그 책은?',
        ansL:'엄청난 반전이 숨겨져 있는 스릴러 소설',
        ansR:'소소한 일상의 편린을 보여주는 에세이',
        
    },{
        id:'iLL',
        title:'질문 12',
        question:'드디어 기다려온 영화의 개봉일! 당신이 기다려온 그 영화의 이야기는?',
        ansL:'어두운 도시속 사건을 해결해 나가는 탐정의 이야기',
        ansR:'쨍쨍한 햇빛 아래 사랑을 나누는 연인의 이야기'
    },{
        id:'iLR',
        title:'질문 12',
        question:'당신은 가장 보고싶던 뮤지컬을 관람하러 왔습니다. 당신이 가장 보고싶은 뮤지컬은 무엇인가요?',
        ansL:'불후의 명곡을 남긴 명작 뮤지컬 오페라의 유령',
        ansR:'주인의 곁을 끝까지 지킨 충견의 이야기 하치 이야기'
    },{
        id:'iLLL',
        type:'F',
        point:3
    },{
        id:'iLLR',
        type:'F',
        point:1
    },{
        id:'iLRL',
        type:'F',
        point:2
    },{
        id:'iLRR',
        type:'T',
        point:2
    },{
        id:'iR',
        title:'질문 11',
        question:'야구 경기를 보러온 당신. 그런데 마침 가장 좋아하는 선수가 친 홈런볼이 당신에게 오고있습니다! 캐치 성공! 그런데 옆에 초롱초롱한 눈으로 당신을 쳐다보는 아이에게 홈런볼을 양보하라고 외치는 관객들. 당신의 선택은?',
        ansL:'담담히 가방 속에서 노이즈 캔슬링 헤드폰을 꺼내든다',
        ansR:'우물쭈물하다가 쿨한 척 아이에게 넘겨준다',
        
    },{
        id:'iRL',
        title:'질문 12',
        question:'드디어 기다려온 영화의 개봉일! 당신이 기다려온 그 영화의 장르는?',
        ansL:'실화를 기반으로 한 현실 비판 영화',
        ansR:'작가의 상상력을 기반으로 재편셩된 현실적인 영화'
    },{
        id:'iRR',
        title:'질문 12',
        question:'당신은 스포츠 구단을 운영하는 구단주입니다. 당신의 구단의 올해 성적은 무려 꼴찌!! 이제 남은 방법은 영입을 하는 방법뿐입니다. 구단주인 당신의 선택은?',
        ansL:'미래를 위한 투자를 하자! 다수의 유망주를 영입한다!',
        ansR:'당장 내일이 없는데 무슨 미래?! 소수의 베테랑을 영입한다'
    },{
        id:'iRLL',
        type:'T',
        point:4
    },{
        id:'iRLR',
        type:'T',
        point:1
    },{
        id:'iRRL',
        type:'T',
        point:1
    },{
        id:'iRRR',
        type:'T',
        point:3
    }],    

    //PPAK Q    
    [{
        id:'i',
        title:'질문 1',
        question:'친구가 핸드폰을 새로 구매했는데 구매한지 한시간만에 깨버렸습니다. 당신의 선택은?',
        ansL:'진심으로 걱정해준다',
        ansR:'진심을 다해서 웃는다',
    },
    {
        id:'iL',
        title:'질문 2',
        question:'당신은 어느 한 사람의 70년대 학창시절 사진을보았습니다. 그 사람의 머리 스타일은?',
        ansL:'깻잎 머리',
        ansR:'2:8 가르마',
        
    },{
        id:'iLL',
        title:'질문 3',
        question:'여름에는 시원한 민트초코 프라페 VS 신선한 생과일 주스',
        ansL:'민트초코 프라페',
        ansR:'신선한 생과일 주스'
    },{
        id:'iLR',
        title:'질문 3',
        question:'전날의 숙취를 뜨끈한 쌀국수로 해장하고 싶은 당신은 배달앱을 통해 주문을 하려고 합니다. 기호에 맞게 토핑을 추가하던 중 고수가 눈에 보입니다.',
        ansL:'고수? 오히려 좋아',
        ansR:'말 없이 뺀다.'
    },{
        id:'iLLL',
        type:'PPAK',
        point:'M'
    },{
        id:'iLLR',
        type:'PPAK',
        point:'S'
    },{
        id:'iLRL',
        type:'PPAK',
        point:'M'
    },{
        id:'iLRR',
        type:'PPAK',
        point:'S'
    },
    {
        id:'iR',
        title:'질문 2',
        question:'시험까지 남은 시간 5분.. 급하게 뛰어가는 당신 앞에 보이는 울고 있는 아이! 길을 잃었다며 당신을 쳐다보는데..',
        ansL:'괜찮니? 내가 도와줄게!',
        ansR:'시험이 코앞인데..! 쌩~',
        
    },{
        id:'iRL',
        title:'질문 3',
        question:'좋은 술과 함께 맛있는 저녁식사를 마친 당신, 양치질 하려고 하는데 두 가지 치약이 보입니다. 당신의 선택은?',
        ansL:'엄마가 사둔 죽염 치약',
        ansR:'과일 향이 나는 동생의 타요 치약'
    },{
        id:'iRR',
        title:'질문 3',
        question:'유명 요리사의 요리 비책 레시피를 보면서 음식을 만든다. 설탕은 취향껏 넣으라고 하는데 설탕 안넣어도 충분하다 VS 설탕 한스푼을 더 넣는다.',
        ansL:'설탕 안넣어도 충분하다',
        ansR:'설탕 한 스푼을 더 넣는다'
    },{
        id:'iRLL',
        type:'PPAK',
        point:'M'
    },{
        id:'iRLR',
        type:'PPAK',
        point:'S'
    },{
        id:'iRRL',
        type:'PPAK',
        point:'M'
    },{
        id:'iRRR',
        type:'PPAK',
        point:'S'
    }],
        
]