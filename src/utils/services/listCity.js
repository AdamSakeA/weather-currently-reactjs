import React from "react";

export default function listCity(Component) {
  const payload = [
    {
      nation: "Indonesia",
      code: "ID",
      city: ["Bekasi", "Jakarta", "Bandung", "Bali", "Depok", "Tambun"],
    },
    {
      nation: "Germany",
      code: "GR",
      city: ["Bekasi", "Jakarta", "Bandung", "Bali", "Depok", "Tambun"],
    },
  ];
  return () => <Component payload={payload} />;
}
