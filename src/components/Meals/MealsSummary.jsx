import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Food For you
      </h2>
      <p>
        Choose your food from our selection of available meals and enjoy a quiet night
        with your family.
      </p>
      <p>
        Our meals are cooked with hight quality ingredients, just in time and by
        exepreienced chefs!
      </p>
    </section>
  );

};

export default MealsSummary;