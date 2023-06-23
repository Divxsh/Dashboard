import { Cell, Pie, PieChart, Tooltip } from "recharts";

const CustomPieChart = () => {
  const data = [
    { name: "Custom Short Pants", value: 31 },
    { name: "Basic Tees", value: 55 },
    { name: "Super Hoodies", value: 14 },
  ];

  const COLORS = ["#F6DC7D", "#98D89E", "#EE8484"];

  return (
    <PieChart width={180} height={180}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius={80}
        cx={"50%"}
        cy={"50%"}
        fill="#8884d8"
        label={false}
        strokeWidth={0}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default CustomPieChart;
