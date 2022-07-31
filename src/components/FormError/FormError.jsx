import styles from "./FormError.module.css";

export default function FormError({ nameOfInput, inputErrors }) {
  return (
    <>
      {Object.keys(inputErrors.errors).map((errorItem) => {
        if (errorItem.includes(nameOfInput)) {
          return (
            <p key={Math.random()} className={styles.form__error}>
              {inputErrors.errors[errorItem]}
            </p>
          );
        }
        return <div key={Math.random()}></div>;
      })}
    </>
  );
}
