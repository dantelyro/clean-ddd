import { expect, test } from 'vitest'
import { QuestionsRepository } from '../repositories/questions-repository'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionsRepository: QuestionsRepository = {
  create: async () => {},
}

test('should be able to create a question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'New question',
    content: 'Question content',
  })

  expect(question.title).toEqual('New question')
  expect(question.content).toEqual('Question content')
})
