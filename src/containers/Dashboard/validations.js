import Yup from '../../utils/validations';

export const newMovieSchema = Yup.object().shape({
  Title: Yup.string().required(),
  Plot: Yup.string().max(250).required(),
  Genre: Yup.string().required()
});