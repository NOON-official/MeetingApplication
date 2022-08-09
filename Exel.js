var XLSX = require('xlsx')
var workbook = XLSX.readFile('Test2.xlsx', { cellDates: true })
var worksheet = workbook.Sheets['Sheet1']
var data = XLSX.utils.sheet_to_json(worksheet)
var womanTwo = []
var womanThree = []
var manTwo = []
var manThree = []
data.map((data) => {
  if (data['우리팀의 성별은 어떻게 되나요?'] === '남성') {
    if (data['우리팀의 인원은 몇명인가요?'] === '2명') {
      manTwo.push(data)
    } else if (data['우리팀의 인원은 몇명인가요?'] === '3명') {
      manThree.push(data)
    }
  } else {
    if (data['우리팀의 인원은 몇명인가요?'] === '2명') {
      womanTwo.push(data)
    } else if (data['우리팀의 인원은 몇명인가요?'] === '3명') {
      womanThree.push(data)
    }
  }
})
var womanTwoMathingList = []
womanTwo.map((data) => {
  var womanMatching = [
    data[
      '미팅고는 일주일 이내로 상대방이 매칭되고 연락을 드립니다. 연락가능한 카카오톡 아이디를 알려주세요.\r\n(카톡ID는 꼭 검색 가능 기능을 활성화해 주세요!)'
    ],
  ]
  var avoidUniv =
    data['기피하는 상대방의 학교는 어디인가요?\r\n(중복입력 가능)'].split(',')
  manTwo.map((dataMan) => {
    var Univ =
      dataMan[
        '우리의 학교는어딘가요? (중복 입력 가능)\r\nex> 고려대, 국민대, 광운대'
      ].split(',')

    var machable = true
    avoidUniv.map((univSearch) => {
      Univ.map((manUniv) => {
        if (univSearch === manUniv) {
          machable = false
        } else {
        }
      })
    })
    if (machable) {
      var newArray = womanMatching.concat([
        dataMan[
          '미팅고는 일주일 이내로 상대방이 매칭되고 연락을 드립니다. 연락가능한 카카오톡 아이디를 알려주세요.\r\n(카톡ID는 꼭 검색 가능 기능을 활성화해 주세요!)'
        ],
      ])
    }
    console.log(newArray)

    womanTwoMathingList.push(newArray)
  })
})

console.log(womanTwoMathingList)
