interface ScoreProps {
    score:number,
    questions: Array<questions>
}

interface questions {
    question: string
    answers: Array<Answer>
  }

  interface Answer {
    answer: string,
    correct: boolean
  }

const Score = (props:ScoreProps) => {
    const { score, questions } = props;
    const maxScore = questions.length;
  return (
    <div className="App_score"> Your score: {score} / {maxScore}</div>
  )
}

export default Score
