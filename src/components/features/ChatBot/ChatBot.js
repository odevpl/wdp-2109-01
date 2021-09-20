import React from 'react';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ChatBot.module.scss';
import { faUser, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

class ChatBot extends React.Component {
  state = {
    visible: false,
  };

  handleClick = event => {
    event.preventDefault();
    if (this.state.visible === false) {
      this.setState({
        visible: true,
      });
    } else {
      this.setState({
        visible: false,
      });
    }
  };
  render() {
    return (
      <div className={styles.root}>
        <div className={this.state.visible === true ? styles.show : styles.hide}>
          <div className={styles.window}>
            <div className={styles.background}>
              <FontAwesomeIcon icon={faUser} className={styles.icon} />
              <div className={styles.message}>
                <p>How can I help you?</p>
              </div>
            </div>
          </div>
          <div className={styles.chat}>
            <form>
              <textarea placeholder='Enter your text here.'></textarea>
              <div className={styles.iconBox}>
                <FontAwesomeIcon icon={faShare} />
              </div>
            </form>
          </div>
        </div>
        <Button variant='outline' className={styles.button} onClick={this.handleClick}>
          <FontAwesomeIcon icon={faComment} /> Do you need help? Write it.
        </Button>
      </div>
    );
  }
}

export default ChatBot;
