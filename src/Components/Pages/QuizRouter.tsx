import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import CategorySelection from './CategorySelection'
import Evaluation from './Evaluation'
import QuestionsContainer from './QuestionsContainer'
import categories from '../../Helper/Categories'
import questions from '../../Helper/Questions'
import _ from 'lodash'
import Question from '../../Types/Question'

export default function QuizRouter() {
  const [selectedCategories, setSelectedCategories] = useState(
    new Array(categories.length).fill(false)
  )

  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([])
  const [selectedAnswersArrays, setSelectedAnswersArrays] = useState<
    string[][]
  >(new Array(15).fill([]))

  function resetQuestions() {
    const filteredQuestions = questions.filter(
      // Check whether the questions category is true in the selected Categories
      (question) => selectedCategories[question.category - 1] === true
    )

    // Draw sample from filteredQuestions
    const newSelectedQuestions = _.sampleSize(filteredQuestions, 15)
    setSelectedQuestions(newSelectedQuestions)
  }

  useEffect(() => {
    resetQuestions()
  }, [selectedCategories])

  useEffect(() => {
    setSelectedAnswersArrays(
      selectedQuestions.map((question) =>
        // Fill answer strings depending on question type
        // Multiple Choice Answers have a default of "false" while text have empty strings
        new Array(question.answers.length).fill(
          question.type === 'multiple-choice' ? 'false' : ''
        )
      )
    )
  }, [selectedQuestions])

  return (
    <Routes>
      <Route
        path="categories"
        element={
          <CategorySelection
            categories={categories.map((categoryObj) => categoryObj.name)}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            resetQuestions={resetQuestions}
          />
        }
      />
      <Route
        path="questions"
        element={
          <QuestionsContainer
            selectedQuestions={selectedQuestions}
            selectedAnswers={selectedAnswersArrays}
            setSelectedAnswers={setSelectedAnswersArrays}
          />
        }
      />
      <Route
        path="evaluation"
        element={
          <Evaluation
            selectedQuestions={selectedQuestions}
            selectedAnswers={selectedAnswersArrays}
          />
        }
      />
    </Routes>
  )
}
