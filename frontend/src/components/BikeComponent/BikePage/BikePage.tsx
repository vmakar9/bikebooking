import {BikesList} from "../BikesList/BikesList";
import {BikeForm} from "../BikeForm/BikeForm";
import {Stats} from "../Stats/Stats";
import css from "./BikePage.module.css"
export const BikePage = () => {
    return (
        <div className={css.BikePage}>
            <div className={css.BikeListContainer}>
                <BikesList />
            </div>
            <div className={css.BikeFormStatsContainer}>
                <div className={css.BikeFormContainer}>
                    <BikeForm />
                </div>
                <div className={css.StatsContainer}>
                    <hr/>
                    <Stats />
                </div>
            </div>
        </div>
    );
};