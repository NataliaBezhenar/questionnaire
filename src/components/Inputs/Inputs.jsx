import FormError from "../FormError";
import styles from "../Form/Form.module.css";

export default function Inputs({ textValue, onInputChange, onBlur }) {
  return (
    <div className={styles["form__inputs-group"]}>
      <div className={styles["input-field"]}>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            value={textValue.firstName}
            onChange={onInputChange}
            onBlur={onBlur}
            placeholder="John"
          />
        </label>
        <FormError inputErrors={textValue} nameOfInput="firstName" />
      </div>

      <div className={styles["input-field"]}>
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={textValue.lastName}
            onChange={onInputChange}
            placeholder="Johnson"
            onBlur={onBlur}
          />
        </label>
        <FormError inputErrors={textValue} nameOfInput="lastName" />
      </div>

      <div className={styles["input-field"]}>
        <label>
          Birth Date
          <input
            type="date"
            min="1900-01-01"
            max="2022-12-31"
            name="birthDate"
            value={textValue.birthDate}
            onChange={onInputChange}
            //required
          />
        </label>
        <FormError inputErrors={textValue} nameOfInput="birthDate" />
      </div>

      <div className={styles["input-field"]}>
        <label>
          Phone number
          <input
            type="tel"
            name="phone"
            value={textValue.phone}
            onChange={onInputChange}
            placeholder="7-7777-77-77"
          />
        </label>
        <FormError inputErrors={textValue} nameOfInput="phone" />
      </div>

      <div className={styles["input-field"]}>
        <label>
          Your site
          <input
            type="text"
            name="site"
            maxLength="50"
            value={textValue.site}
            onChange={onInputChange}
            placeholder="https://developer.mozilla.org/"
            onBlur={onBlur}
          />
        </label>
        <FormError inputErrors={textValue} nameOfInput="site" />
      </div>
    </div>
  );
}
