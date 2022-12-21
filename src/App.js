import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import GamePage from "./pages/GamePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const PcPage = lazy(() => import("./pages/PcPage"));
const BrowserPage = lazy(() => import("./pages/BrowserPage"));
const GameDetailPage = lazy(() => import("./pages/GameDetailPage"));

function App() {
    return (
        <Fragment>
            <Suspense fallback={<></>}>
                <Routes>
                    <Route element={<Main></Main>}>
                        <Route path="/" element={<HomePage></HomePage>}></Route>
                        <Route
                            path="/games"
                            element={<GamePage></GamePage>}
                        ></Route>
                        <Route path="/pc" element={<PcPage></PcPage>}></Route>
                        <Route
                            path="/browser"
                            element={<BrowserPage></BrowserPage>}
                        ></Route>
                        <Route
                            path="/sign-up"
                            element={<SignUpPage></SignUpPage>}
                        ></Route>
                        <Route
                            path="/sign-in"
                            element={<SignInPage></SignInPage>}
                        ></Route>
                        <Route
                            path="/game/:gameId"
                            element={<GameDetailPage></GameDetailPage>}
                        ></Route>
                    </Route>
                </Routes>
            </Suspense>
        </Fragment>
    );
}

export default App;
