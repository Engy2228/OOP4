class Dictionary {
  constructor(name) {
    this.name = name
    this.words ={}
  }
  add(word,description) {
    if (!this.words[word]) {
      this.words[word] = {word, description}
    }
  }

  remove(word) {
    delete this.words[word]
  }

  get(word) {
    return this.words[word]
  }
  
  showAllWords() {
    Object.values(this.words)
    .forEach((word) => {
      console.log(`${word.word} - ${word.description}`)
    })
    console.log(this.words)
}
}

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super (name)

  }
  add(word,description, isDifficult = true) {

    if (!this.words[word]) {
      this.words[word] = {word, description, isDifficult}
    }

  }
}
const hardWordsDictionary = new HardWordsDictionary('Сложные слова')
console.log(hardWordsDictionary)

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');  
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');     
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.'); 
hardWordsDictionary.remove('неологизм');
hardWordsDictionary.showAllWords();



const dictionary = new Dictionary('Толковый словарь');
console.log(dictionary)
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
dictionary.remove('JavaScript');
dictionary.showAllWords();
