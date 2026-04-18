import ButtonShowcase from "../showcase/ButtonShowcase";
import InputShowcase from "../showcase/InputShowcase";
import BadgeShowcase from "../showcase/BadgeShowcase";
import CardShowcase from "../showcase/CardShowcase";
import AlertShowcase from "../showcase/AlertShowcase";
import ModalShowcase from "../showcase/ModalShowcase";
import TabsShowcase from "../showcase/TabsShowcase";
import SpinnerShowcase from "../showcase/SpinnerShowcase";

export const components = [
  { id: "button", label: "Button", component: ButtonShowcase },
  { id: "input", label: "Input", component: InputShowcase },
  { id: "badge", label: "Badge", component: BadgeShowcase },
  { id: "card", label: "Card", component: CardShowcase },
  { id: "alert", label: "Alert", component: AlertShowcase },
  { id: "modal", label: "Modal", component: ModalShowcase },
  { id: "tabs", label: "Tabs", component: TabsShowcase },
  { id: "spinner", label: "Spinner", component: SpinnerShowcase },
];