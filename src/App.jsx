import { useState } from 'react'

// styleas
import './App.css';

// components
import ExerciseOne from './Components/ExerciseOne'
import ExerciseTwo from './Components/ExerciseTwo'

function App() {
	// states
	const [exerciseView, setExerciseView] = useState("exercise1")

	return (
		<div className="App">
			{/* btns */}
			<div className="btns-view">
				<button
					className={`btn ${exerciseView === "exercise1" ? "active" : ""}`}
					onClick={ev => {
						ev.preventDefault()

						// setting excercise view
						setExerciseView("exercise1")
					}}>
					Excersice One
				</button>

				<button
					className={`btn ${exerciseView === "exercise2" ? "active" : ""}`}
					onClick={ev => {
						ev.preventDefault()

						// setting excercise view
						setExerciseView("exercise2")
					}}>
					Excersice Two
				</button>
			</div>

			{/* content view */}
			<div className="content-view">
				{
					exerciseView === "exercise1" ? (
						<ExerciseOne />
					) : (
						<ExerciseTwo />
					)
				}
			</div>
		</div>
	);
}

export default App;
