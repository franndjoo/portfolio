import { motion } from "framer-motion";
import { ResponsiveDescription } from "../../components/responsive/responsive-description";
import { ResponsiveGrid } from "../../components/responsive/responsive-grid";
import { ResponsiveText } from "../../components/responsive/responsive-text";
import { ResponsiveSubtitle } from "../../components/responsive/responsive-subtitle";
import { UseRatio } from "../../modules/sizing/ratio";
import { ResponsiveComponent } from "../../modules/responsive/responsive";
import { PageData } from "../data/scene-2.ts-data";

import { UseNonUndefined } from "../../modules/var/non-undefined-content";
import { GetClassnameValue } from "../styles/styled";
import { Parallax } from "react-scroll-parallax";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import "../styles/sass/scene.sass";
import { BannerFlow } from "../../components/banner";
import { UsePercentage } from "../../modules/sizing/percentage";
import { ResponsiveValue } from "../../modules/responsive/value";

export const PageScript = (): JSX.Element => {
  const [ParallaxTransition, setParallaxTransition] = useState<{
    [key: string]: number[];
  }>({ y: [-20, 10] });
  const ref = useRef();
  const [inViewRef, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });
  const [percentageMultiplicator, setPercentageMultiplicator] = useState<10 | 25>(ResponsiveValue(10, 25));
  //allow the script to send the tip to the flow
  const [canDisplayTips, setCanDisplayTips] = useState<boolean>(false);

  useEffect(() => {

    const interval = setInterval(() => {
      setPercentageMultiplicator(ResponsiveValue(10, 25));
    }, 10);

    return function cleanup () {
      clearInterval(interval);
    }
  }, []);

  const setRef = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  useEffect(() => {
    const timeout = setTimeout(() => setCanDisplayTips(true), 500);

    return function cleanup() {
      clearInterval(timeout);
    };
  }, []);

  useEffect(() => {
    if (canDisplayTips)
      BannerFlow.next({
        title: VerifiedPageTexts.bannerTipTitle,
        content: VerifiedPageTexts.bannerTipContent,
        color: "black",
        duration: 5000,
      });
  }, [inView]);

  const VerifiedPageTexts = UseNonUndefined(PageData.PageTexts);
  const VerifiedPageTables = UseNonUndefined(PageData.PageTables);

  return (
    <div {...PageData.PageData}>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: GetClassnameValue("radial-gradient"),
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "rgba(255,255,255,0.4)",
            backdropFilter: "blur(5px)",
            borderTop: "5px solid rgba(255,255,255,0.5)",
            borderBottom: "5px solid rgba(255,255,255,0.5)",
          }}
        >
          <ResponsiveComponent
            style={{
              width: "75%",
            }}
            mobile_style={{
              marginTop: "5vh",
              marginBottom: "5vh",
            }}
          >
            <div>
              <ResponsiveComponent style={{ padding: "3vh" }} mobile_style={{}}>
                <ResponsiveComponent
                  style={{ marginBottom: "5%" }}
                  mobile_style={{ marginBottom: "10%" }}
                >
                  <div>
                    <ResponsiveSubtitle>
                      {VerifiedPageTexts.subtitle1}
                    </ResponsiveSubtitle>
                  </div>
                  <div>
                    <ResponsiveDescription>
                      {VerifiedPageTexts.description1}
                    </ResponsiveDescription>
                  </div>
                </ResponsiveComponent>
                <div ref={setRef}>
                  <ResponsiveGrid
                    gridLeftContent={VerifiedPageTables[1].text}
                    gridRightContent={VerifiedPageTables[1].comps}
                    gridLeftContentTemplate={(props: { children?: any }) => (
                      <ResponsiveComponent
                        style={{
                          width: "90%",
                          textAlign: "left",
                          marginLeft: "5%",
                        }}
                        mobile_style={{
                          width: "90%",
                          textAlign: "center",
                          marginLeft: "0%",
                        }}
                      >
                        <ResponsiveText>{props.children}</ResponsiveText>
                      </ResponsiveComponent>
                    )}
                    gridRightContentTemplate={(props: { children?: any }) => (
                      <Parallax {...ParallaxTransition}>
                        <motion.div
                          initial={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: UseRatio(16 / 9, UsePercentage(percentageMultiplicator)).width,
                            height: UseRatio(16 / 9, UsePercentage(percentageMultiplicator)).height,
                            boxShadow: GetClassnameValue("white-box-shadow"),
                            borderRadius: GetClassnameValue(
                              "element-border-radius-size"
                            ),
                            backgroundColor: "white",
                          }}
                          whileHover={{
                            boxShadow: GetClassnameValue(
                              "white-box-shadow-active"
                            ),
                          }}
                        >
                          {props.children}
                        </motion.div>
                      </Parallax>
                    )}
                    allowedDimensions={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </ResponsiveComponent>
              <ResponsiveComponent
                style={{ padding: "3vh" }}
                mobile_style={{ marginTop: "10%" }}
              >
                <div>
                  <ResponsiveComponent
                    style={{ marginBottom: "5%" }}
                    mobile_style={{ marginBottom: "10%" }}
                  >
                    <div>
                      <ResponsiveSubtitle>
                        {VerifiedPageTexts.subtitle2}
                      </ResponsiveSubtitle>
                    </div>
                    <div>
                      <ResponsiveDescription>
                        {VerifiedPageTexts.description2}
                      </ResponsiveDescription>
                    </div>
                  </ResponsiveComponent>
                  <div>
                    <ResponsiveGrid
                      gridLeftContent={VerifiedPageTables[2].text}
                      gridRightContent={VerifiedPageTables[2].comps}
                      gridLeftContentTemplate={(props: { children?: any }) => (
                        <div
                          style={{
                            width: "90%",
                            textAlign: "left",
                            marginLeft: "5%",
                          }}
                        >
                          <ResponsiveText>{props.children}</ResponsiveText>
                        </div>
                      )}
                      gridRightContentTemplate={(props: { children?: any }) => (
                        <Parallax {...ParallaxTransition}>
                          <motion.div
                            initial={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: UseRatio(16 / 9, UsePercentage(percentageMultiplicator)).width,
                              height: UseRatio(16 / 9, UsePercentage(percentageMultiplicator)).height,
                              boxShadow: GetClassnameValue("white-box-shadow"),
                              borderRadius: GetClassnameValue(
                                "element-border-radius-size"
                              ),
                              backgroundColor: "white",
                            }}
                            whileHover={{
                              boxShadow: GetClassnameValue(
                                "white-box-shadow-active"
                              ),
                            }}
                          >
                            {props.children}
                          </motion.div>
                        </Parallax>
                      )}
                      allowedDimensions={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
              </ResponsiveComponent>
            </div>
          </ResponsiveComponent>
        </div>
      </div>
    </div>
  );
};
