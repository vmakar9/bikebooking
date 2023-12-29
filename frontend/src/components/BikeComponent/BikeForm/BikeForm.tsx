import {SubmitHandler, useForm} from "react-hook-form";
import {IBike} from "../../../interfaces/bike.interface";
import css from "./BikeForm.module.css"
import {bikeActions} from "../../../redux/slices/bikeSlice";
import {useAppDispatch} from "../../../hooks/reduxHooks";
import {bikeValidator} from "../../../validators/bike.validator";
import {joiResolver} from "@hookform/resolvers/joi";
import Joi from "joi";


export const BikeForm=()=>{

    const {reset,register,handleSubmit,formState:{isValid,errors}} = useForm<IBike>({
        mode:'all',
        resolver:joiResolver(Joi.object(bikeValidator))
    })
    const dispatch = useAppDispatch()

    const create:SubmitHandler<IBike> = async (bike)=>{
        await dispatch(bikeActions.create({bike}))
        reset()
    }

    const handleReset = () => {
        reset();
    };

    return(<div>
     <div>
         <form onSubmit={handleSubmit(create)}>
             <div className={css.NameType}>
             <input className={css.Input} type={'text'} placeholder={'Name'} {...register('name')} />
             {errors.name && <p>{errors.name.message}</p>}

             <input className={css.Input} type={'text'} placeholder={'Type'} {...register('type')} />
             {errors.type && <p>{errors.type.message}</p>}
               </div>
             <div className={css.ColorWheelSize}>
             <input className={css.Input} type={'text'} placeholder={'Color'} {...register('color')} />
             {errors.color && <p>{errors.color.message}</p>}

             <input className={css.Input} type={'text'} placeholder={'Wheel size'} {...register('wheel_size')} />
             {errors.wheel_size && <p>{errors.wheel_size.message}</p>}
             </div>
             <div className={css.Price}>
             <input className={css.Input} type={'text'} placeholder={'Price'} {...register('price')} />
             {errors.price && <p>{errors.price.message}</p>}
             </div>
             <div>
              <textarea
                  placeholder="Description"
                  name="description"
                  {...register("description")}
                  rows={4}
                  cols={100}
                  className={css.Description}
              />
             {errors.description && <p>{errors.description.message}</p>}
             </div>
             <div className={css.Buttons}>
                 <button className={css.Button} disabled={!isValid}>Save</button>
                 <button className={css.Button} onClick={handleReset}>Reset</button>
             </div>

         </form>
     </div>
    </div>)
}