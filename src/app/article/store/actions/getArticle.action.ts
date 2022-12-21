import { createAction, props } from '@ngrx/store'
import { ActionTypes } from '../actionTypes'
import { ArticleInterface } from 'src/app/shared/types/article.interface'

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ slug: string | null }>()
)

export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
)

export const getArticleFailureAction = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
)
