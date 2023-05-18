import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const Notification = ({ message }) => <p className={css.title}>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
