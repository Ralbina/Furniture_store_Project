import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Navigate, NavLink } from "react-router-dom";
import "../Payment/Payment.css";

const CreditCard = () => {
  const [number, SetNumber] = useState("");
  const [name, SetName] = useState("");
  const [month, SetMonth] = useState("");
  let [expiry, SetExpiry] = useState("");
  const [cvc, SetCvc] = useState("");
  const [focus, SetFocus] = useState("");
  const handleDate = (e) => {
    SetMonth(e.target.value);
    SetExpiry(e.target.value);
  };
  const handleExpiry = (e) => {
    SetExpiry(month.concat(e.target.value));
  };

  return (
    <>
      <div className="container-payment">
        <div clasName="rccs__card rccs__card--unknown">
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
          />
        </div>
        <br />
        <form className="formInput">
          <div className="row">
            <div className="col-sm-11">
              <input
                type="tel"
                className="form-control"
                value={number}
                name="number"
                maxlength="16"
                pattern="[0-9]+"
                placeholder="Номер карты"
                onChange={(e) => {
                  SetNumber(e.target.value);
                }}
                onFocus={(e) => SetFocus(e.target.name)}
              ></input>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-11">
              <input
                type="text"
                className="form-control"
                value={name}
                name="name"
                placeholder="Ф.И.О"
                onChange={(e) => {
                  SetName(e.target.value);
                }}
                onFocus={(e) => SetFocus(e.target.name)}
              ></input>
            </div>
          </div>
          <br />
          <div className="row">
            <div
              className="col=sm-8"
              style={{
                ...{ "padding-right": "12em" },
                ...{ "padding-left": "1em" },
              }}
            >
              <label for="month">Дата CVV </label>
            </div>
            <div className="col=sm-4">
              <label for="cvv"></label>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <select
                className="form-control"
                name="expiry"
                onChange={handleDate}
              >
                <option value=" ">Месяц</option>
                <option value="01">Янв</option>
                <option value="02">Фев</option>
                <option value="03">Март</option>
                <option value="04">Апр</option>
                <option value="05">Май</option>
                <option value="06">Июнь</option>
                <option value="07">Июль</option>
                <option value="08">Авг</option>
                <option value="09">Сен</option>
                <option value="10">Окт</option>
                <option value="11">Нов</option>
                <option value="12">Дек</option>
              </select>
            </div>
            &nbsp;
            <div className="col-sm-4">
              <select
                className="form-control"
                name="expiry"
                onChange={handleExpiry}
              >
                <option value=" ">Год</option>
                <option value="21">2021</option>
                <option value="22">2022</option>
                <option value="23">2023</option>
                <option value="24">2024</option>
                <option value="25">2025</option>
                <option value="26">2026</option>
                <option value="27">2027</option>
                <option value="28">2028</option>
                <option value="29">2029</option>
                <option value="30">2030</option>
              </select>
            </div>
            <div className="col-sm-3">
              <input
                type="tel"
                name="cvc"
                maxlength="3"
                className=" form-control card"
                value={cvc}
                pattern="\d*"
                placeholder="cvv"
                onChange={(e) => {
                  SetCvc(e.target.value);
                }}
                onFocus={(e) => SetFocus(e.target.name)}
              ></input>
            </div>
          </div>
          <br />
          <NavLink to="/confirm">
            <input
              type="submit"
              className="btn btn-danger form-control"
              value="ПОДТВЕРДИТЬ"
            />
          </NavLink>
        </form>
      </div>
    </>
  );
};
export default CreditCard;
