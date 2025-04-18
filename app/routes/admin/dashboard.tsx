import { Header, StatsCard, TripCard } from "~/components";

const Dashboard = () => {
  const user = { name: "Adrian" };
  const dashboardStats = {
    totalUsers: 1237,
    usersJoined: { currentMonth: 218, lastMonth: 176 },
    totalTrips: 118,
    tripsCreated: { currentMonth: 6, lastMonth: 2 },
    userRole: { total: 62, currentMonth: 63, lastMonth: 78 },
  };

  const allTrips = [
    {
      id: 1,
      name: "Trip 1",
      imageUrls: ["/assets/images/sample.jpeg"],
      itinerary: [{ location: "New York" }],
      tags: ["Adventure", "Culture"],
      travelStyle: "Solo",
      estimatedPrice: "$1,000",
    },
    {
      id: 2,
      name: "Trip 2",
      imageUrls: ["/assets/images/sample.jpeg"],
      itinerary: [{ location: "Paris" }],
      tags: ["Relaxation", "Culinary"],
      travelStyle: "Family",
      estimatedPrice: "$2,000",
    },
    {
      id: 3,
      name: "Trip 3",
      imageUrls: ["/assets/images/sample.jpeg"],
      itinerary: [{ location: "Tokyo" }],
      tags: ["Shopping", "Luxury"],
      travelStyle: "Couple",
      estimatedPrice: "$3,000",
    },
    {
      id: 4,
      name: "Trip 4",
      imageUrls: ["/assets/images/sample.jpeg"],
      itinerary: [{ location: "Rome" }],
      tags: ["Historical", "Culture"],
      travelStyle: "Friends",
      estimatedPrice: "$4,000",
    },
  ];

  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"} 👋`}
        description="Track activity, trends, and popular destinations in real time"
      />
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total Users"
            total={dashboardStats.totalUsers}
            currentMonthCount={dashboardStats.usersJoined.currentMonth}
            lastMonthCount={dashboardStats.usersJoined.lastMonth}
          />
          <StatsCard
            headerTitle="Total Trips"
            total={dashboardStats.totalTrips}
            currentMonthCount={dashboardStats.tripsCreated.currentMonth}
            lastMonthCount={dashboardStats.tripsCreated.lastMonth}
          />
          <StatsCard
            headerTitle="Active Users Today"
            total={dashboardStats.userRole.total}
            currentMonthCount={dashboardStats.userRole.currentMonth}
            lastMonthCount={dashboardStats.userRole.lastMonth}
          />
        </div>
        <section className="container">
          <h1 className="text-xl font-semibold text-dark-100">
            Created Itineraries
          </h1>
          <div className="trip-grid">
            {allTrips.slice(0, 4).map((trip) => (
              <TripCard
                key={trip.id}
                id={trip.id.toString()}
                name={trip.name}
                imageUrl={trip.imageUrls[0]}
                location={trip.itinerary?.[0]?.location ?? ""}
                tags={trip.tags}
                price={trip.estimatedPrice}
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Dashboard;
