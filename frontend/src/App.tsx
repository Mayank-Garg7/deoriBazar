import Card from "./components/shared/Card";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-200">
      <Card >
        <h1 className="text-3xl font-bold text-blue-600">
          Welcome to Deori Bazar
        </h1>
        <p className="mt-4 text-gray-600">Your local marketplace platform.</p>

      </Card>
    </div>
  );
};

export default App;