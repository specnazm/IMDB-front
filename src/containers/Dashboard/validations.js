import Yup from '../../utils/validations';

export const newMovieSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().max(250).required(),
  genre: Yup.string().required()
});