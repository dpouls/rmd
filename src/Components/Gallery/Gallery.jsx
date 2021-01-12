import React, { useEffect } from "react";
import useFirestore from "../../hooks/useFirestore";
import { withRouter } from "react-router-dom";
import "./Gallery.scss";
import { motion } from "framer-motion";

const Gallery = () => {
  const { docs } = useFirestore("images");
  return (
    <div className="gallery-page">
      {docs &&
        docs.map((link, i) => {
          return (
            <motion.div layout key={link.id} className={`grid-item item-${i}`}>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="grid-img"
                src={link.url}
                alt="display or pedestal"
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default withRouter(Gallery);
