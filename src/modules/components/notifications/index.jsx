import { AndroidNotification } from "./android";
import { IOSNotification } from "./ios";

import { isIOS } from "react-device-detect";

import { randomBetweenRange } from "@/helpers/random/randomBetweenRange";
import { formatMoney } from "@/helpers/format";

import moment from "moment";
import 'moment-timezone';

const Notify = ({ value, setNotificationVisible }) => {

    const banks = {
        1: {
            icon: "nu",
            bank: <span className="text-xs text-purple-700">Nubank&nbsp;</span>,
            title: "Transferência recebida",
            description: `Você recebeu uma transferência de ${formatMoney(value)} de SOCIAL MONEY.`
        },
        2: {
            icon: "inter",
            bank: <span className="text-xs text-orange-700">Inter&nbsp;</span>,
            title: "Pix recebido",
            description: `Você recebeu um Pix no valor de ${formatMoney(value)}.`
        },
        3: {
            icon: "itau",
            bank: <span className="text-xs text-blue-800">Itaú&nbsp;</span>,
            title: "Pix recebido com sucesso",
            description: `Você recebeu um pix de SOCIAL MONEY, no valor de ${formatMoney(value)} em ${moment().format("DD/MM/YYYY")}.`
        },

    }

  return (
    <>
      {isIOS ? (
        <IOSNotification data={banks[randomBetweenRange(1,3)]} setNotification={setNotificationVisible} value={value}/>
      ) : (
        <AndroidNotification data={banks[randomBetweenRange(1,3)]} setNotification={setNotificationVisible} value={value}/>
      )}
    </>
  );
};

export { Notify };
