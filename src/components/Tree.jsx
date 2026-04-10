import React from 'react';
import './Tree.css';

const Tree = () => {
    return (
        <section className="tree section-padding" id="tree">
            <div className="container">
                <h2 className="section-title text-center">شجرة الأسرة</h2>
                <p className="section-subtitle text-center">
                    فروع متجذرة في التاريخ، متطلعة نحو المستقبل
                </p>

                <div className="tree-container glass-panel fade-in-up">
                    <div className="tree-branches">
                        <div className="branch">
                            <h4>فرع محمد</h4>
                            <p>ابن منصور بن محمد ابن حمود</p>
                        </div>
                        <div className="branch">
                            <h4>فرع صالح</h4>
                            <p>ابن منصور بن محمد ابن حمود</p>
                        </div>
                    </div>

                    <div className="tree-image-wrapper">
                        <img
                            src="/images/family_tree.png"
                            alt="شجرة عائلة الشقحاء"
                            className="tree-image"
                        />
                        <div className="zoom-hint">
                            <span>🔍 يمكن تكبير الصورة لاستعراض التفاصيل</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tree;
