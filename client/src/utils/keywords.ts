export type KeywordsType = {
  text: string
  description: string
  category: string
  description_kor?: string
}

export enum Category {
  GENRE = 'genre',
  ERA = 'era',
  MALE_CHARACTER = 'male',
  FEMALE_CHARACTER = 'female',
  RELATIONSHIP = 'relationship',
  EVENT = 'event',
  LOCATION = 'location',
  INCLUDE = 'include',
  THEME = 'theme',
  PLOT = 'plot',
  SETTING = 'setting',
}

export const keywords: Array<KeywordsType> = [
  {
    text: '시리어스',
    description: 'The narrative is serious.',
    description_kor: '소설의 분위기는 진지하다.',
    category: Category.GENRE,
  },
  {
    text: '힐링',
    description: 'The narrative is healing.',
    description_kor: '소설의 분위기는 힐링물이다.',
    category: Category.GENRE,
  },
  {
    text: '감성',
    description: 'The narrative is something emotional.',
    description_kor: '소설의 분위기는 감성적이다.',
    category: Category.GENRE,
  },
  {
    text: '피폐물',
    description: 'The narrative is hopeless and despairing.',
    description_kor: '소설의 분위기는 피폐물이다.',
    category: Category.GENRE,
  },
  {
    text: '귀여움',
    description: 'The story has a cute and sweet theme.',
    description_kor: '소설의 분위기는 귀엽다.',
    category: Category.GENRE,
  },
  {
    text: '달달물',
    description: 'The narrative is sweet and romantic.',
    description_kor: '소설의 분위기는 달달하다.',
    category: Category.GENRE,
  },
  {
    text: '성장물',
    description: 'The narrative is coming-of-age.',
    description_kor: '소설의 분위기는 성장물이다.',
    category: Category.GENRE,
  },
  {
    text: '코믹/개그',
    description: 'The narrative is comical and humorous.',
    description_kor: '소설의 분위기는 코믹, 개그이다.',
    category: Category.GENRE,
  },
  {
    text: '로코',
    description: 'The narrative is romantic comedy.',
    description_kor: '소설의 분위기는 로맨틱 코미디이다.',
    category: Category.GENRE,
  },
  {
    text: '호러물',
    description: 'The narrative is horror.',
    description_kor: '소설의 분위기는 호러이다.',
    category: Category.GENRE,
  },
  {
    text: '사이다',
    description: 'The narrative is cathartic and just.',
    description_kor: '소설의 분위기는 권선징악이다.',
    category: Category.GENRE,
  },
  {
    text: '애절물',
    description: 'The narrative is melancholic and sad.',
    description_kor: '소설의 분위기는 애절물이다.',
    category: Category.GENRE,
  },
  {
    text: '미스터리',
    description: 'The narrative is mysterious.',
    description_kor: '소설의 분위기는 미스터리 이다.',
    category: Category.GENRE,
  },
  {
    text: '여성서사',
    description: 'The narrative is feminine.',
    description_kor: '소설의 분위기는 여성서사 이다.',
    category: Category.GENRE,
  },
  {
    text: '소프트',
    description: 'The narrative is softcore.',
    description_kor: '소설의 분위기는 소프트코어 이다.',
    category: Category.GENRE,
  },
  {
    text: '현대물',
    description: `the story's background is in the modern, contemporary setting.`,
    description_kor: '소설의 시대적 배경은 현대이다.',
    category: Category.ERA,
  },
  {
    text: '동양시대물',
    description: `the story's setting is in the oriental era.`,
    description_kor: '소설의 시대적 배경은 과거의 동양이다.',
    category: Category.ERA,
  },
  {
    text: '서양시대물',
    description: `the story's setting is in the western era.`,
    description_kor: '소설의 시대적 배경은 과거의 서양이다.',
    category: Category.ERA,
  },
  {
    text: 'SF/근미래',
    description: `the story's background is in the near future, in a sci-fi setting.`,
    description_kor: '소설의 시대적 배경은 SF, 근미래 이다.',
    category: Category.ERA,
  },
  {
    text: '현대판타지',
    description: `the story's background is in modern fantasy.`,
    description_kor: '소설의 시대적 배경은 현대 판타지물이다.',
    category: Category.ERA,
  },
  {
    text: '로맨스판타지',
    description: `the story's background is in romantic fantasy.`,
    description_kor: '소설의 시대적 배경은 로맨스 판타지이다.',
    category: Category.ERA,
  },
  {
    text: '퓨전판타지',
    description: `the story's background is in fusion fantasy.`,
    description_kor: '소설의 시대적 배경은 퓨전 판타지이다.',
    category: Category.ERA,
  },
  {
    text: '가상현실',
    description: `the story's background is in virtual reality.`,
    description_kor: '소설의 시대적 배경은 가상현실이다.',
    category: Category.ERA,
  },
  {
    text: '무협',
    description: `the story is a martial arts novel.`,
    description_kor: '소설의 시대적 배경은 무협이다.',
    category: Category.ERA,
  },
  {
    text: '계략남',
    description: `The male protagonist is a schemer.`,
    description_kor: '소설의 남자 주인공은 계략가이다.',
    category: Category.MALE_CHARACTER,
  },
  {
    text: '까칠남',
    description: `The male protagonist is fiesty and sensitive.`,
    description_kor: '소설의 남자 주인공은 까칠하다.',
    category: Category.MALE_CHARACTER,
  },
  {
    text: '나쁜남자',
    description: `The male protagonist is a bad boy.`,
    description_kor: '소설의 남자 주인공은 나쁜 남자이다.',
    category: Category.MALE_CHARACTER,
  },
  {
    text: '냉정남',
    description: `The male protagonist is cold-hearted.`,
    description_kor: '소설의 남자 주인공은 냉정하다.',
    category: Category.MALE_CHARACTER,
  },
  {
    text: '뇌섹남',
    description: `The male protagonist is super intelligent and hot.`,
    description_kor: '소설의 남자 주인공은 뇌섹남이다.',
    category: Category.MALE_CHARACTER,
  },
  {
    text: '능글남',
    description: `The male protagonist is a sly ladies' man.`,
    description_kor: '소설의 남자 주인공은 까칠하다.',
    category: Category.MALE_CHARACTER,
  },
  {
    text: '능력남',
    description: `The male protagonist is very capable and hot.`,
    description_kor: '소설의 남자 주인공은 능력남이다.',
    category: Category.MALE_CHARACTER,
  },
  {
    text: '다정남',
    description: `The male protagonist is a kind sweetheart.`,
    description_kor: '소설의 남자 주인공은 다정남이다.',
    category: Category.MALE_CHARACTER,
  },
  {
    text: '대형견남',
    description: `The male protagonist is kind and protective.`,
    description_kor: '소설의 남자 주인공은 대형견남이다.',
    category: Category.MALE_CHARACTER,
  },
  {
    text: '무심남',
    description: `The male protagonist has an indifferent personality.`,
    description_kor: '소설의 남자 주인공은 무심남이다.',
    category: Category.MALE_CHARACTER,
  },
  {
    text: '사차원남',
    description: `The male protagonist has a quirky and strange personality.`,
    description_kor: '소설의 남자 주인공은 사차원남이다.',
    category: Category.MALE_CHARACTER,
  },
  {
    text: '상처남',
    description: `The male protagonist is emotionally hurt.`,
    description_kor: '소설의 남자 주인공은 상처남이다.',
    category: Category.MALE_CHARACTER,
  },
  {
    description: 'unexpected visit from a friend',
    text: '친구의 뜻밖 방문',
    category: Category.EVENT,
  },
  {
    description: 'successful business venture',
    text: '성공적인 사업',
    category: Category.EVENT,
  },
  {
    description: "saving someone's life",
    text: '누군가의 생명 구하기',
    category: Category.EVENT,
  },
  {
    description: 'making new friends',
    text: '새로운 친구 만들기',
    category: Category.EVENT,
  },
  {
    description: 'winning a sports competition',
    text: '스포츠 대회 우승',
    category: Category.EVENT,
  },
  {
    description: 'finding a new hobby',
    text: '새로운 취미 발견',
    category: Category.EVENT,
  },
  {
    text: '새침남',
    description: `The male protagonist is coy and aloof.`,
    description_kor: '소설의 남자 주인공은 새침남이다.',
    category: Category.MALE_CHARACTER,
  },
  {
    text: '순정남',
    description: `The male protagonist is commited and romantic.`,
    description_kor: '소설의 남자 주인공은 순정남이다.',
    category: Category.MALE_CHARACTER,
  },
  {
    text: '순진남',
    description: `The male protagonist is naive and innocent.`,
    description_kor: '소설의 남자 주인공은 순진남이다.',
    category: Category.MALE_CHARACTER,
  },
  {
    text: '애교남',
    description: `The male protagonist is adorable and cute.`,
    description_kor: '소설의 남자 주인공은 애교남이다.',
    category: Category.MALE_CHARACTER,
  },
  {
    text: '연하남',
    description: `The male protagonist is younger man.`,
    description_kor: '소설의 남자 주인공은 연하남이다.',
    category: Category.MALE_CHARACTER,
  },
  {
    text: '오만남',
    description: `The male protagonist is arrogant and proud.`,
    description_kor: '소설의 남자 주인공은 오만남이다.',
    category: Category.MALE_CHARACTER,
  },
  {
    text: '유혹남',
    description: `The male protagonist is seductive and attractive.`,
    description_kor: '소설의 남자 주인공은 유혹남이다.',
    category: Category.MALE_CHARACTER,
  },
  {
    text: '재벌남',
    description: `The male protagonist is mega-rich.`,
    description_kor: '소설의 남자 주인공은 재벌남이다.',
    category: Category.MALE_CHARACTER,
  },
  {
    text: '계략녀',
    description: `The female protagonist is a schemer.`,
    description_kor: '소설의 여자 주인공은 계략녀이다.',
    category: Category.FEMALE_CHARACTER,
  },
  {
    text: '까칠녀',
    description: `The female protagonist is fiesty and sensitive.`,
    description_kor: '소설의 여자 주인공은 까칠녀이다.',
    category: Category.FEMALE_CHARACTER,
  },
  {
    text: '나쁜여자',
    description: `The female protagonist is a bad girl.`,
    description_kor: '소설의 여자 주인공은 나쁜여자이다.',
    category: Category.FEMALE_CHARACTER,
  },
  {
    text: '냉정녀',
    description: `The female protagonist is cold-hearted.`,
    description_kor: '소설의 여자 주인공은 냉정녀이다.',
    category: Category.FEMALE_CHARACTER,
  },
  {
    text: '뇌섹녀',
    description: `The female protagonist is super intelligent and hot.`,
    description_kor: '소설의 여자 주인공은 뇌섹녀이다.',
    category: Category.FEMALE_CHARACTER,
  },
  {
    text: '능글녀',
    description: `The female protagonist is sly and a femme-fatale.`,
    description_kor: '소설의 여자 주인공은 능글녀이다.',
    category: Category.FEMALE_CHARACTER,
  },
  {
    text: '능력녀',
    description: `The female protagonist is very capable and hot.`,
    description_kor: '소설의 여자 주인공은 능력녀이다.',
    category: Category.FEMALE_CHARACTER,
  },
  {
    text: '다정녀',
    description: `The female protagonist is a kind sweetheart.`,
    description_kor: '소설의 여자 주인공은 다정녀이다.',
    category: Category.FEMALE_CHARACTER,
  },
  {
    text: '도도녀',
    description: `The female protagonist is a proud and haughty.`,
    description_kor: '소설의 여자 주인공은 도도녀이다.',
    category: Category.FEMALE_CHARACTER,
  },
  {
    text: '무심녀',
    description: `The female protagonist has an indifferent personality.`,
    description_kor: '소설의 여자 주인공은 무심녀이다.',
    category: Category.FEMALE_CHARACTER,
  },
  {
    text: '사이다녀',
    description: `The female protagonist is just and righteous.`,
    description_kor: '소설의 여자 주인공은 사이다녀이다.',
    category: Category.FEMALE_CHARACTER,
  },
  {
    text: '사차원녀',
    description: `The female protagonist is a quirky and strange personality.`,
    description_kor: '소설의 여자 주인공은 사차원녀이다.',
    category: Category.FEMALE_CHARACTER,
  },
  {
    text: '상처녀',
    description: `The female protagonist is emotionally hurt.`,
    description_kor: '소설의 여자 주인공은 상처녀이다.',
    category: Category.FEMALE_CHARACTER,
  },
  {
    text: '새침녀',
    description: `The female protagonist is coy and aloof.`,
    description_kor: '소설의 여자 주인공은 새침녀이다.',
    category: Category.FEMALE_CHARACTER,
  },
  {
    text: '학원물',
    description: `The story takes place in a school.`,
    description_kor: '소설의 공간적 배경은 학원물 이다.',
    category: Category.LOCATION,
  },

  {
    description: 'superhero origin story',
    text: '슈퍼히어로 탄생 이야기',
    category: Category.EVENT,
  },
  { description: 'time loop', text: '타임 루프', category: Category.EVENT },
  {
    description: 'detective investigation',
    text: '수사',
    category: Category.EVENT,
  },
  {
    description: 'treasure island adventure',
    text: '보물섬 모험',
    category: Category.EVENT,
  },
  {
    description: 'supernatural possession',
    text: '초자연적인 소유',
    category: Category.EVENT,
  },
  {
    description: 'battle for the throne',
    text: '왕좌 전쟁',
    category: Category.EVENT,
  },
  {
    description: 'archaeological dig',
    text: '고고학 발굴',
    category: Category.EVENT,
  },
  { description: 'space battle', text: '우주 전투', category: Category.EVENT },
  { description: 'zombie outbreak', text: '좀비', category: Category.EVENT },
  {
    description: 'stock market crash',
    text: '주식시장 붕괴',
    category: Category.EVENT,
  },
  {
    description: 'falling in love',
    text: '사랑에 빠지다',
    category: Category.EVENT,
  },
  {
    description: 'getting a promotion',
    text: '승진하기',
    category: Category.EVENT,
  },
  {
    text: '캠퍼스물',
    description: `The story takes place in a college campus.`,
    description_kor: '소설의 공간적 배경은 캠퍼스물 이다.',
    category: Category.LOCATION,
  },
  {
    text: '오피스',
    description: `The story takes place in an office.`,
    description_kor: '소설의 공간적 배경은 오피스 이다.',
    category: Category.LOCATION,
  },
  {
    text: '궁정물',
    description: `The story takes place in a palace.`,
    description_kor: '소설의 공간적 배경은 궁정물 이다.',
    category: Category.LOCATION,
  },
  {
    text: '연예계',
    description: `The story takes place in showbusiness.`,
    description_kor: '소설의 공간적 배경은 연예계 이다.',
    category: Category.LOCATION,
  },
  {
    text: '조직/암흑가',
    description: `The story takes place in a mafia/gang.`,
    description_kor: '소설의 공간적 배경은 조직/암흑가 이다.',
    category: Category.LOCATION,
  },
  {
    text: '게임',
    description: `The story takes place in a game.`,
    description_kor: '소설의 공간적 배경은 게임 이다.',
    category: Category.LOCATION,
  },
  {
    text: '군부물',
    description: `The story takes place in the military.`,
    description_kor: '소설의 공간적 배경은 군부물 이다.',
    category: Category.LOCATION,
  },
  {
    text: '왕족/귀족',
    description: `The story takes place in the royal family.`,
    description_kor: '소설의 공간적 배경은 왕족/귀족 이다.',
    category: Category.LOCATION,
  },
  {
    text: '뱀파이어',
    description: `The story subject is vampire.`,
    description_kor: '이 소설은 뱀파이어를 소재로 다루어야 한다.',
    category: Category.INCLUDE,
  },
  {
    text: '수인물',
    description: `The story subject is furry.`,
    description_kor: '이 소설은 수인물을 소재로 다루어야 한다.',
    category: Category.INCLUDE,
  },
  {
    text: '천사/악마/마족',
    description: `The story subject is angel, demons, and myths.`,
    description_kor: '이 소설은 천사, 악마, 마족을 소재로 다루어야 한다.',
    category: Category.INCLUDE,
  },
  {
    text: '귀신/유령',
    description: `The story subject is about ghosts.`,
    description_kor: '이 소설은 귀신, 유령을 소재로 다루어야 한다.',
    category: Category.INCLUDE,
  },
  {
    text: '인외/초월적존재',
    description: `The story subject is about the supernatural.`,
    description_kor: '이 소설은 인외, 초월적존재를 소재로 다루어야 한다.',
    category: Category.INCLUDE,
  },
  {
    text: '외국인',
    description: `The story subject is about foreigners.`,
    description_kor: '이 소설은 외국인을 소재로 다루어야 한다.',
    category: Category.INCLUDE,
  },
  {
    text: '수사물',
    description: `The story subject is about an investigation.`,
    description_kor: '이 소설은 수사를 소재로 다루어야 한다.',
    category: Category.INCLUDE,
  },
  {
    text: '사건물',
    description: `The story subject is about a case report.`,
    description_kor: '이 소설은 사건을 소재로 다루어야 한다.',
    category: Category.INCLUDE,
  },
  {
    text: '이중인격',
    description: `The story subject is about a split personality.`,
    description_kor: '이 소설에는 이중인격인 등장인물이 나온다.',
    category: Category.INCLUDE,
  },
  {
    text: '주종관계',
    description: `The characters are in a hierarchial relationship.`,
    description_kor: '이 소설의 등장인물들은 서로 주종관계 이다.',
    category: Category.RELATIONSHIP,
  },
  {
    text: '갑을관계',
    description: `The characters are in a boss-employee relationship.`,
    description_kor: '이 소설의 등장인물들은 서로 갑을관계 이다.',
    category: Category.RELATIONSHIP,
  },
  {
    text: '배틀',
    description: `The characters are in a competitive relationship.`,
    description_kor: '이 소설의 등장인물들은 서로 배틀 이다.',
    category: Category.RELATIONSHIP,
  },
  {
    text: '삼각/다각관계',
    description: `The character's relationship is a love triangle.`,
    description_kor: '이 소설의 등장인물들은 서로 삼각/다각관계 이다.',
    category: Category.RELATIONSHIP,
  },
  {
    text: '원나잇',
    description: `The characters had a one-night stand with each other.`,
    description_kor: '이 소설의 등장인물들은 서로 원나잇 스탠드를 한 사이이다.',
    category: Category.RELATIONSHIP,
  },
  {
    text: '짝사랑',
    description: `One character has a crush on the other.`,
    description_kor:
      '이 소설의 등장인물들은 한쪽이 다른쪽을 짝사랑하는 사이이다.',
    category: Category.RELATIONSHIP,
  },
  {
    text: '친구에서연인',
    description: `The characters are in a friend to lover relationship.`,
    description_kor:
      '이 소설의 등장인물들은 서로 친구에서 연인으로 발전한 사이이다.',
    category: Category.RELATIONSHIP,
  },
  {
    text: '오해/착각',
    description: `The character's relationship is .`,
    description_kor: '이 소설의 등장인물들은 서로 오해와 착각이 있는 사이이다.',
    category: Category.RELATIONSHIP,
  },
  {
    text: '애증',
    description: `The characters are in a love hate relationship.`,
    description_kor: '이 소설의 등장인물들은 서로 애증의 관계이다.',
    category: Category.RELATIONSHIP,
  },
  {
    text: '복수',
    description: `The characters are in a vengeful relationship.`,
    description_kor:
      '이 소설의 등장인물들은 한쪽이 다른쪽에게 복수하려고 하는 관계이다.',
    category: Category.RELATIONSHIP,
  },
  {
    text: '재회',
    description: `The characters are in a relationship where they are reunited after a long time.`,
    description_kor: '이 소설의 등장인물들은 서로 재회한 관계이다.',
    category: Category.RELATIONSHIP,
  },
  {
    text: '감금',
    description: `The characters are in a relationship where one holds the other in incarceration.`,
    description_kor: '이 소설의 등장인물들은 한쪽이 다른쪽을 감금한 관계이다.',
    category: Category.RELATIONSHIP,
  },
  {
    text: '육아',
    description: `The characters are in a relationship where they raise a child together.`,
    description_kor: '이 소설의 등장인물들은 같이 육아를 하는 사이이다.',
    category: Category.RELATIONSHIP,
  },
  {
    text: '키잡',
    description: `The characters are in a grooming / toy boy relationship.`,
    description_kor:
      '이 소설의 등장인물들은 한쪽이 다른쪽을 키잡하는 관계이다.',
    category: Category.RELATIONSHIP,
  },
  {
    text: '역키잡',
    description: `The characters are in a reverse grooming relationship.`,
    description_kor:
      '이 소설의 등장인물들은 한쪽이 다른쪽을 역키잡하는 관계이다.',
    category: Category.RELATIONSHIP,
  },
  {
    text: '라이벌',
    description: `The characters are rivals to each other.`,
    description_kor: '이 소설의 등장인물들은 서로 라이벌 이다.',
    category: Category.RELATIONSHIP,
  },
  {
    text: '동거물',
    description: `The characters are in a relationship where they live together.`,
    description_kor: '이 소설의 등장인물들은 서로 동거하는 사이이다.',
    category: Category.RELATIONSHIP,
  },
  {
    text: '큰 나이차이',
    description: `The characters are in a relationship where they have an age gap.`,
    description_kor: '이 소설의 등장인물들은 서로 나이차이가 크다.',
    category: Category.RELATIONSHIP,
  },
  { description: 'murder', text: '살인', category: Category.EVENT },
  { description: 'robbery', text: '강도', category: Category.EVENT },
  { description: 'kidnapping', text: '납치', category: Category.EVENT },
  { description: 'betrayal', text: '배신', category: Category.EVENT },
  {
    description: 'terrorist attack',
    text: '테러 공격',
    category: Category.EVENT,
  },
  { description: 'space mission', text: '우주 여행', category: Category.EVENT },
  { description: 'time travel', text: '시간 여행', category: Category.EVENT },
  {
    description: 'alien invasion',
    text: '외계인 침공',
    category: Category.EVENT,
  },
  {
    description: 'virus outbreak',
    text: '바이러스 발생',
    category: Category.EVENT,
  },
  {
    description: 'supernatural event',
    text: '초자연적인 사건',
    category: Category.EVENT,
  },
  { description: 'treasure hunt', text: '보물 탐험', category: Category.EVENT },
  {
    description: 'political scandal',
    text: '정치 스캔들',
    category: Category.EVENT,
  },
  { description: 'epic battle', text: '대규모 전투', category: Category.EVENT },
  {
    description: 'sports championship',
    text: '스포츠 챔피언십',
    category: Category.EVENT,
  },
  { description: 'great flood', text: '대홍수', category: Category.EVENT },
  {
    description: 'robot uprising',
    text: '로봇의 반란',
    category: Category.EVENT,
  },
  {
    description: 'natural disaster',
    text: '자연 재해',
    category: Category.EVENT,
  },
  {
    description: 'high-speed chase',
    text: '고속 추격전',
    category: Category.EVENT,
  },
  {
    description: 'family reunion',
    text: '가족 상봉',
    category: Category.EVENT,
  },
  {
    description: 'lost in the wilderness',
    text: '황야에서 길을 잃다',
    category: Category.EVENT,
  },
  {
    description: 'medical emergency',
    text: '의료 비상사태',
    category: Category.EVENT,
  },
  {
    description: 'winning the lottery',
    text: '복권 당첨',
    category: Category.EVENT,
  },
  {
    description: 'surprise party',
    text: '깜짝 파티',
    category: Category.EVENT,
  },
  {
    description: 'beach vacation',
    text: '해변 휴가',
    category: Category.EVENT,
  },
  {
    description: 'family reunion',
    text: '가족 재회',
    category: Category.EVENT,
  },
  { description: 'summer camp', text: '여름 캠프', category: Category.EVENT },
  {
    description: 'holiday celebration',
    text: '휴일 축하',
    category: Category.EVENT,
  },
  {
    description: 'starting a new job',
    text: '새로운 직장 시작',
    category: Category.EVENT,
  },
  { description: 'getting married', text: '결혼', category: Category.EVENT },
  {
    description: 'finding a lost item',
    text: '분실물을 찾다',
    category: Category.EVENT,
  },
  {
    description: 'birth of a child',
    text: '아이 탄생',
    category: Category.EVENT,
  },
  {
    description: 'receiving a scholarship',
    text: '장학금을 받다',
    category: Category.EVENT,
  },
  {
    description: 'graduating from school',
    text: '학교 졸업',
    category: Category.EVENT,
  },
  {
    description: 'performing on stage',
    text: '무대 공연',
    category: Category.EVENT,
  },
  {
    description: 'achieving a personal goal',
    text: '개인적 목표 달성',
    category: Category.EVENT,
  },
  {
    description: 'overcoming a fear',
    text: '공포 극복',
    category: Category.EVENT,
  },
  {
    description: 'moving to a new city',
    text: '새로운 도시로 이사',
    category: Category.EVENT,
  },
  { description: 'retiring from work', text: '은퇴', category: Category.EVENT },
  {
    description: 'adopting a pet',
    text: '애완동물 입양',
    category: Category.EVENT,
  },
  {
    description: 'completing a marathon',
    text: '마라톤 완주',
    category: Category.EVENT,
  },
  {
    description: 'reuniting with a loved one',
    text: '사랑하는 사람과 재회',
    category: Category.EVENT,
  },
  {
    description: 'finding true happiness',
    text: '진정한 행복 찾기',
    category: Category.EVENT,
  },
  {
    description: 'starting a family',
    text: '가족을 시작하다',
    category: Category.EVENT,
  },
  { description: 'love', text: '사랑', category: Category.THEME },
  { description: 'loss', text: '상실', category: Category.THEME },
  { description: 'family', text: '가족', category: Category.THEME },
  { description: 'identity', text: '정체성', category: Category.THEME },
  { description: 'friendship', text: '우정', category: Category.THEME },
  { description: 'betrayal', text: '배신', category: Category.THEME },
  { description: 'redemption', text: '구원', category: Category.THEME },
  { description: 'survival', text: '생존', category: Category.THEME },
  { description: 'coming of age', text: '성장', category: Category.THEME },
  { description: 'good vs. evil', text: '선과 악', category: Category.THEME },
  { description: 'power', text: '권력', category: Category.THEME },
  { description: 'ambition', text: '야망', category: Category.THEME },
  { description: 'morality', text: '도덕성', category: Category.THEME },
  { description: 'justice', text: '정의', category: Category.THEME },
  { description: 'change', text: '변화', category: Category.THEME },
  { description: 'sacrifice', text: '희생', category: Category.THEME },
  { description: 'transformation', text: '변형', category: Category.THEME },
  { description: 'secrets', text: '비밀', category: Category.THEME },
  { description: 'discovery', text: '발견', category: Category.THEME },
  { description: 'nostalgia', text: '향수', category: Category.THEME },
  { description: 'fear', text: '공포', category: Category.THEME },
  { description: 'forgiveness', text: '용서', category: Category.THEME },
  { description: 'acceptance', text: '인정', category: Category.THEME },
  { description: 'individuality', text: '개성', category: Category.THEME },
  { description: 'passion', text: '열정', category: Category.THEME },
  { description: 'truth', text: '진실', category: Category.THEME },
  { description: 'war', text: '전쟁', category: Category.THEME },
  { description: 'peace', text: '평화', category: Category.THEME },
  { description: 'hope', text: '희망', category: Category.THEME },
  { description: 'oppression', text: '억압', category: Category.THEME },
  { description: 'rebellion', text: '반란', category: Category.THEME },
  { description: 'time', text: '시간', category: Category.THEME },
  { description: 'memory', text: '기억', category: Category.THEME },
  { description: 'religion', text: '종교', category: Category.THEME },
  { description: 'destiny', text: '운명', category: Category.THEME },
  { description: 'technology', text: '기술', category: Category.THEME },
  {
    description: 'environmentalism',
    text: '환경주의',
    category: Category.THEME,
  },
  { description: 'social justice', text: '사회정의', category: Category.THEME },
  { description: 'humanity', text: '인간성', category: Category.THEME },
  { description: 'isolation', text: '고립', category: Category.THEME },
  {
    description: 'human nature',
    text: '인간의 본성',
    category: Category.THEME,
  },
  { description: 'nostalgia', text: '회상', category: Category.THEME },
  { description: 'dreams', text: '꿈', category: Category.THEME },
  { description: 'aging', text: '노화', category: Category.THEME },
  { description: 'illusion', text: '환영', category: Category.THEME },
  { description: 'transcendence', text: '초월', category: Category.THEME },
  { description: 'heroism', text: '영웅성', category: Category.THEME },
  { description: 'growth', text: '성장', category: Category.THEME },
  { description: 'manipulation', text: '조작', category: Category.THEME },
  { description: 'competition', text: '경쟁', category: Category.THEME },
  { description: 'Detective', text: '수사관', category: 'character' },
  { description: 'Soldier', text: '군인', category: 'character' },
  { description: 'Writer', text: '작가', category: 'character' },
  { description: 'Teacher', text: '교사', category: 'character' },
  { description: 'Scientist', text: '과학자', category: 'character' },
  { description: 'Musician', text: '음악가', category: 'character' },
  { description: 'Doctor', text: '의사', category: 'character' },
  { description: 'Lawyer', text: '변호사', category: 'character' },
  { description: 'Athlete', text: '운동선수', category: 'character' },
  { description: 'Chef', text: '요리사', category: 'character' },
  { description: 'Police officer ', text: '경찰관', category: 'character' },
  { description: 'Artist', text: '예술가', category: 'character' },
  { description: 'Journalist', text: '저널리스트', category: 'character' },
  { description: 'Engineer', text: '엔지니어', category: 'character' },
  { description: 'Entrepreneur', text: '기업가', category: 'character' },
  { description: 'Actor/actress', text: '배우', category: 'character' },
  { description: 'Inventor', text: '발명가', category: 'character' },
  { description: 'Pilot', text: '조종사', category: 'character' },
  { description: 'Secret agent', text: '비밀요원', category: 'character' },
  { description: 'Spy', text: '스파이', category: 'character' },
  { description: 'school', text: '학교', category: Category.LOCATION },
  { description: 'city', text: '도시', category: Category.LOCATION },
  { description: 'jungle', text: '정글', category: Category.LOCATION },
  { description: 'forest', text: '숲', category: Category.LOCATION },
  { description: 'desert', text: '사막', category: Category.LOCATION },
  {
    description: 'space station',
    text: '우주 정거장',
    category: Category.LOCATION,
  },
  { description: 'laboratory', text: '연구실', category: Category.LOCATION },
  { description: 'castle', text: '성', category: Category.LOCATION },
  { description: 'beach', text: '해변', category: Category.LOCATION },
  { description: 'island', text: '섬', category: Category.LOCATION },
  { description: 'mountain', text: '산', category: Category.LOCATION },
  { description: 'farm', text: '농장', category: Category.LOCATION },
  { description: 'spaceship', text: '우주선', category: Category.LOCATION },
  { description: 'prison', text: '감옥', category: Category.LOCATION },
  {
    description: 'haunted mansion',
    text: '유령 궁전',
    category: Category.LOCATION,
  },
  { description: 'small town', text: '작은 마을', category: Category.LOCATION },
  { description: 'village', text: '마을', category: Category.LOCATION },
  { description: 'underwater', text: '수중', category: Category.LOCATION },
  {
    description: 'amusement park',
    text: '놀이 공원',
    category: Category.LOCATION,
  },
  { description: 'circus', text: '서커스', category: Category.LOCATION },
  { description: 'museum', text: '박물관', category: Category.LOCATION },
  { description: 'hospital', text: '병원', category: Category.LOCATION },
  { description: 'theater', text: '극장', category: Category.LOCATION },
  {
    description: 'apartment building',
    text: '아파트 건물',
    category: Category.LOCATION,
  },
  { description: 'cruise ship', text: '크루즈선', category: Category.LOCATION },
  { description: 'restaurant', text: '레스토랑', category: Category.LOCATION },
  { description: 'airport', text: '공항', category: Category.LOCATION },
  { description: 'shopping mall', text: '쇼핑몰', category: Category.LOCATION },
  { description: 'casino', text: '카지노', category: Category.LOCATION },
  {
    description: 'ski resort',
    text: '스키 리조트',
    category: Category.LOCATION,
  },
  { description: 'art gallery', text: '미술관', category: Category.LOCATION },
  {
    description: 'office building',
    text: '사무실 건물',
    category: Category.LOCATION,
  },
  { description: 'theme park', text: '테마파크', category: Category.LOCATION },
  { description: 'space shuttle', text: '우주선', category: Category.LOCATION },
  { description: 'battlefield', text: '전장', category: Category.LOCATION },
  { description: 'summer camp', text: '여름캠프', category: Category.LOCATION },
  {
    description: 'haunted forest',
    text: '괴담의 숲',
    category: Category.LOCATION,
  },
  { description: 'mansion', text: '저택', category: Category.LOCATION },
  { description: 'train station', text: '기차역', category: Category.LOCATION },
  { description: 'carnival', text: '카니발', category: Category.LOCATION },
  { description: 'submarine', text: '잠수함', category: Category.LOCATION },
  {
    description: 'jungle temple',
    text: '밀림 사원',
    category: Category.LOCATION,
  },
  {
    description: 'abandoned warehouse',
    text: '버려진 창고',
    category: Category.LOCATION,
  },
  {
    description: 'laboratory complex',
    text: '연구소 복합 건물',
    category: Category.LOCATION,
  },
  { description: 'university', text: '대학교', category: Category.LOCATION },
  {
    description: 'concert hall',
    text: '콘서트홀',
    category: Category.LOCATION,
  },
  {
    description: 'mansion in the woods',
    text: '숲 속 저택',
    category: Category.LOCATION,
  },
  {
    description: 'TV studio',
    text: 'TV 스튜디오',
    category: Category.LOCATION,
  },
  {
    description: 'radio station',
    text: '라디오 방송국',
    category: Category.LOCATION,
  },
  { description: 'volcano', text: '화산', category: Category.LOCATION },
  { description: 'love triangle', text: '삼각관계', category: Category.PLOT },
  {
    description: 'mysterious disappearance',
    text: '신비로운 사라짐',
    category: Category.PLOT,
  },
  {
    description: 'family secrets',
    text: '가족의 비밀',
    category: Category.PLOT,
  },
  {
    description: 'unexplainable phenomena',
    text: '설명할 수 없는 현상',
    category: Category.PLOT,
  },
  {
    description: 'forgotten past',
    text: '잊혀진 과거',
    category: Category.PLOT,
  },
  {
    description: 'struggle for survival',
    text: '생존을 위한 사투',
    category: Category.PLOT,
  },
  {
    description: 'treacherous betrayal',
    text: '배신과 음모',
    category: Category.PLOT,
  },
  {
    description: 'journey of self-discovery',
    text: '자아 발견의 여정',
    category: Category.PLOT,
  },
  {
    description: 'powerful ancient artifact',
    text: '강력한 고대 유물',
    category: Category.PLOT,
  },
  {
    description: 'haunted mansion',
    text: '빛바랜 저택',
    category: Category.SETTING,
  },
  {
    description: 'enchanted forest',
    text: '마법의 숲',
    category: Category.SETTING,
  },
  {
    description: 'post-apocalyptic world',
    text: '대재앙 이후의 세계',
    category: Category.SETTING,
  },
  {
    description: 'underground city',
    text: '지하 도시',
    category: Category.SETTING,
  },
  {
    description: 'remote island paradise',
    text: '외딴 섬의 낙원',
    category: Category.SETTING,
  },
  {
    description: 'time-traveling adventure',
    text: '시간 여행 모험',
    category: Category.PLOT,
  },
  {
    description: 'alternate reality',
    text: '대체 현실',
    category: Category.PLOT,
  },
  {
    description: 'dream manipulation',
    text: '꿈 조작',
    category: Category.PLOT,
  },
  {
    description: 'lost civilization',
    text: '잃어버린 문명',
    category: Category.SETTING,
  },
  {
    description: 'supernatural abilities',
    text: '초자연적 능력',
    category: Category.PLOT,
  },
  {
    description: 'political intrigue',
    text: '정치적 음모',
    category: Category.PLOT,
  },
  {
    description: 'forbidden romance',
    text: '금지된 로맨스',
    category: Category.PLOT,
  },
  { description: 'epic quest', text: '대서사적 모험', category: Category.PLOT },
  {
    description: 'identity crisis',
    text: '정체성의 위기',
    category: Category.THEME,
  },
  {
    description: 'struggle against oppression',
    text: '억압에 맞서는 사투',
    category: Category.THEME,
  },
  {
    description: 'exploration of the unknown',
    text: '알려지지 않은 것의 탐구',
    category: Category.THEME,
  },
  {
    description: 'cultural clash',
    text: '문화적 충돌',
    category: Category.THEME,
  },
  {
    description: "nature's revenge",
    text: '자연의 복수',
    category: Category.PLOT,
  },
  {
    description: 'unbreakable friendship',
    text: '부서지지 않는 우정',
    category: Category.THEME,
  },
  {
    description: 'survival in extreme conditions',
    text: '극한 조건에서의 생존',
    category: Category.PLOT,
  },
  {
    description: 'legacy of a legendary hero',
    text: '전설적 영웅의 유산',
    category: Category.THEME,
  },
  {
    description: 'personal sacrifice',
    text: '개인적 희생',
    category: Category.THEME,
  },
  {
    description: 'corruption and redemption',
    text: '타락과 구원',
    category: Category.THEME,
  },
  {
    description: 'technological dystopia',
    text: '기술적 디스토피아',
    category: Category.SETTING,
  },
  {
    description: 'spiritual awakening',
    text: '영적 각성',
    category: Category.THEME,
  },
  {
    description: 'clash of civilizations',
    text: '문명의 충돌',
    category: Category.PLOT,
  },
  {
    description: "hero's journey",
    text: '영웅의 여정',
    category: Category.PLOT,
  },
  {
    description: 'unraveling a conspiracy',
    text: '음모 해체',
    category: Category.PLOT,
  },
  {
    description: 'life on a generation ship',
    text: '세대 우주선에서의 삶',
    category: Category.SETTING,
  },
  {
    description: 'strange phenomena in a small town',
    text: '작은 마을의 기이한 현상',
    category: Category.PLOT,
  },
  {
    description: 'battle for a mythical artifact',
    text: '신화적 유물을 위한 전투',
    category: Category.PLOT,
  },
]
