import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";

export default function AlgorithmsAndTheirHyperParameter() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Algorithms and Parameters - BangDB</title>
        <meta
          name="description"
          content="Scaling before applying ML algorithms is very important. The main advantage of scaling is to avoid attributes."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Algorithms and Parameters - BangDB"
        />
        <meta
          property="og:description"
          content="Scaling before applying ML algorithms is very important. The main advantage of scaling is to avoid attributes."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Algorithms and Parameters - BangDB"
        />
        <meta
          name="twitter:description"
          content="Scaling before applying ML algorithms is very important. The main advantage of scaling is to avoid attributes."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Algorithms and their HyperParameters</h1>
        <div className="article-body">
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th colSpan="5" rowSpan="1">
                    <h2
                      style={{
                        textAlign: "center",
                        margin: "26px 0",
                      }}
                    >
                      ALGORITHMS and PARAMETERS
                    </h2>
                  </th>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Scaling</span>
                    </p>
                  </td>
                  <td colSpan="4" rowSpan="1">
                    <p>
                      <span>
                        Scaling before applying{" "}
                        <span>
                          <a
                            href="https://bangdb.com/bangdb-ml-examples/"
                            data-wpel-link="internal"
                          >
                            ML
                          </a>
                        </span>{" "}
                        algorithms is very important. The main advantage of
                        scaling is to avoid attributes in greater numeric ranges
                        dominating those in smaller numeric ranges and to avoid
                        numerical difficulties during the calculation.
                      </span>
                    </p>
                    <p>
                      <span>
                        we perform linear scaling that is scale range [-1,1].
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Tune Param</span>
                    </p>
                  </td>
                  <td colSpan="4" rowSpan="1">
                    <p>
                      <span>
                        Proper choice of C and gamma is critical to the
                        SVM&apos;s performance. The user is advised to select
                        Tune Param .
                      </span>
                    </p>
                    <p>
                      <span>
                        On selecting Tune Param - you are performing
                        cross-validation and Grid Search. You can consider speed
                        as step length between two consecutive values C and
                        gamma.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <th colSpan="5" rowSpan="1">
                    <h2
                      style={{
                        textAlign: "center",
                        margin: "26px 0",
                      }}
                    >
                      CLASSIFICATION
                    </h2>
                  </th>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Parameters</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>values</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>Definition</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Tips</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="3">
                    <p>
                      <span>SVM_Type</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>0 - C-SVC</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="3">
                    <p>
                      <span>
                        C-SVC, NuSVC and One-className SVM performes binary and
                        multi-className classification on a dataset. C-SVM and
                        NuSVM are similar methods, but accept slightly different
                        sets of parameters and have different mathematical
                        formulations.
                      </span>
                    </p>
                    <p>
                      <span>
                        One-className SVM algorithms, learns a decision function
                        for novelty detection: classifying new data as similar
                        or different to the training set.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="3">
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>1 - Nu-SVC</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>2 - ONE-className SVM</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="4">
                    <p>
                      <span>Kernel Type</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>0 - Linear</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>linear: u&apos;*v</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="4">
                    <p>
                      <span>
                        Radial Basis Function is a general purpose kernel, used
                        when there is no prior knowledge about the data because
                      </span>
                    </p>
                    <p>
                      <span>
                        1. The linear kernel is a special case of RBF since the
                        linear kernel with a penalty parameter C has the same
                        performance as the RBF kernel with some parameters (C,
                        gamma)
                      </span>
                    </p>
                    <p>
                      <span>
                        2. The second reason is the number of hyperparameters
                        which influences the complexity of model selection. The
                        polynomial kernel has more hyperparameters than
                      </span>
                    </p>
                    <p>
                      <span>the RBF kernel.</span>
                    </p>
                    <p>
                      <span>
                        There are some situations where the RBF kernel is not
                        suitable. In particular, when the number of features is
                        very large, one may just use the linear kernel.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>1 - Polynomial</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>polynomial: (gamma*u&apos;*v + coef0)^degree</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>2 - RBF</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>radial basis function: exp(-gamma*|u-v|^2)</span>
                    </p>
                    <p>
                      <span>
                        This kernel nonlinearly maps samples into a higher
                        dimensional space so it, unlike the linear kernel, can
                        handle the case when the relation between className
                        labels and attributes is nonlinear.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>3 - Sigmoid</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>sigmoid: tanh(gamma*u&apos;*v + coef0)</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Gamma</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>[0.000122,8]</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        gamma defines how much influence a single training
                        example has. The larger gamma is, the closer other
                        examples must be to be affected.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Degree</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        Degree of the polynomial kernel function. Ignored by all
                        other kernels.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Coef0</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        Independent term in kernel function. It is only
                        significant in ‘polynomial&apos; and ‘sigmoid&apos;.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Cost (C)</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>[0.031250,8192]</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        The parameter C, trades off misclassification of
                        training examples against simplicity of the decision
                        surface. A low C makes the decision surface smooth,
                        while a high C aims at classifying all training examples
                        correctly. As C increases, tendency to misclassification
                        decreases on train data( may lead to overfitting).
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>
                        C is 1 by default and it&apos;s a reasonable default
                        choice. If you have a lot of noisy observations you
                        should decrease it: decreasing C corresponds to more
                        regularization.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>NU</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>(0,1]</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        It&apos;s a{" "}
                        <a
                          href="https://en.wikipedia.org/wiki/Hyperparameter_(machine_learning)"
                          data-wpel-link="external"
                          rel="nofollow external noopener noreferrer"
                        >
                          <span>hyperparameter</span>
                        </a>{" "}
                        for nu-SVC, one-className SVM and nu-SVR. It is similar
                        to C. nu is upper bound on the fraction of errors and
                        lower bound on the fraction of number of support
                        vectors( number of support vectors determine the run
                        time).
                      </span>
                    </p>
                    <p>
                      <span>
                        Example: if we want error to be less than 1% then nu is
                        0.01 and the number of supported vectors will be more
                        than 1% of the total records.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>
                        Nu approximates value = the fraction of training errors
                        and support vectors.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Cachesize</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        For C-SVC, SVR, NuSVC and NuSVR, the size of the kernel
                        cache has a strong impact on run times for larger
                        problems.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>
                        If you have enough RAM available, it is recommended to
                        set cache size to a higher value than the default of
                        200(MB), such as 500(MB) or 1000(MB).
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Termination Criterion</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        Tolerance for stopping criterion. The stopping tolerance
                        affects the number of iterations used when optimizing
                        the model.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Shrinking</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        The shrinking are there to save the training time.They
                        sometimes help, and sometimes they do not. It&apos;s a
                        matter of runtime, rather than convergence. If the
                        number of iterations is large, then shrinking can
                        shorten the training time.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>
                        We found that if the number of iterations is large, then
                        shrinking can shorten the training time.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Probability_Estimates</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>Whether to enable probability estimates.</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>nr_weight</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        nr_weight is the number of elements in the array
                        weight_label and weight. Each weight[i] corresponds to
                        weight_label[i], meaning that the penalty of className
                        weight_label[i] is scaled by a factor of weight[i].
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <th colSpan="5" rowSpan="1">
                    <h2
                      style={{
                        textAlign: "center",
                        margin: "26px 0",
                      }}
                    >
                      REGRESSION
                    </h2>
                  </th>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Parameters</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>values</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>Definition</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Tips</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="2">
                    <p>
                      <span>SVM_Type</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>3 - Epsilon-SVR</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="2">
                    <p>
                      <span>
                        The Nu parameter in Nu-SVM can be used to control the
                        amount of support vectors in the resulting model.
                        However, in ϵ-SVR you have no control on how many data
                        vectors from the dataset become support vectors, it
                        could be a few, it could be many. Nonetheless, you will
                        have total control of how much error you will allow your
                        model to have, and anything beyond the specified ϵ will
                        be penalized in proportion to C, which is the
                        regularization parameter.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="2">
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>4 - Nu-SVR</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="4">
                    <p>
                      <span>Kernel Type</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>0 - Linear</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>linear: u&apos;*v</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="4">
                    <p>
                      <span>
                        Radial Basis Function is a general purpose kernel, used
                        when there is no prior knowledge about the data because
                      </span>
                    </p>
                    <p>
                      <span>
                        1. The linear kernel is a special case of RBF since the
                        linear kernel with a penalty parameter C has the same
                        performance as the RBF kernel with some parameters (C,
                        gamma)
                      </span>
                    </p>
                    <p>
                      <span>
                        2. The second reason is the number of hyperparameters
                        which influences the complexity of model selection. The
                        polynomial kernel has more hyperparameters than
                      </span>
                    </p>
                    <p>
                      <span>the RBF kernel.</span>
                    </p>
                    <p>
                      <span>
                        There are some situations where the RBF kernel is not
                        suitable. In particular, when the number of features is
                        very large, one may just use the linear kernel.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>1 - Polynomial</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>polynomial: (gamma*u&apos;*v + coef0)^degree</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>2 - RBF</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>radial basis function: exp(-gamma*|u-v|^2)</span>
                    </p>
                    <p>
                      <span>
                        This kernel nonlinearly maps samples into a higher
                        dimensional space so it, unlike the linear kernel, can
                        handle the case when the relation between className
                        labels and attributes is nonlinear.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>3 - Sigmoid</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>sigmoid: tanh(gamma*u&apos;*v + coef0)</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Gamma</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>[0.000122,8]</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        gamma defines how much influence a single training
                        example has. The larger gamma is, the closer other
                        examples must be to be affected.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Degree</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        Degree of the polynomial kernel function. Ignored by all
                        other kernels.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Coef0</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        Independent term in kernel function. It is only
                        significant in ‘polynomial&apos; and ‘sigmoid&apos;.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Cost (C)</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>[0.031250,8192]</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        Regularization parameter. The strength of the
                        regularization is inversely proportional to C. Must be
                        strictly positive. The penalty is a squared l2 penalty.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>
                        C is 1 by default and it&apos;s a reasonable default
                        choice. If you have a lot of noisy observations you
                        should decrease it: decreasing C corresponds to more
                        regularization.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>NU</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>(0,1]</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        It&apos;s a hyperparameter for nu-SVC, one-className SVM
                        and nu-SVR. It is similar to C. nu is upper bound on the
                        fraction of errors and lower bound on the fraction of
                        number of support vectors( number of support vectors
                        determine the run time).
                      </span>
                    </p>
                    <p>
                      <span>
                        Example: if we want error to be less than 1% then nu is
                        0.01 and the number of supported vectors will be more
                        than 1% of the total records.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>
                        Nu approximates value = the fraction of training errors
                        and support vectors.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Epsilon_SVR (P)</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        Epsilon in the epsilon-SVR model. It specifies the
                        epsilon-tube within which no penalty is associated in
                        the training loss function with points predicted within
                        a distance epsilon from the actual value.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Cachesize</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        For C-SVC, Epsilon-SVR, NuSVC and NuSVR, the size of the
                        kernel cache has a strong impact on run times for larger
                        problems.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>
                        If you have enough RAM available, it is recommended to
                        set cache size to a higher value than the default of
                        200(MB), such as 500(MB) or 1000(MB).
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Termination Criterion</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        Tolerance for stopping criterion. The stopping tolerance
                        affects the number of iterations used when optimizing
                        the model.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Shrinking</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        The shrinking are there to save the training time.They
                        sometimes help, and sometimes they do not. It&apos;s a
                        matter of runtime, rather than convergence. If the
                        number of iterations is large, then shrinking can
                        shorten the training time.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>
                        We found that if the number of iterations is large, then
                        shrinking can shorten the training time.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Probability_Estimates</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>Whether to enable probability estimates.</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <th colSpan="5" rowSpan="1">
                    <h2
                      style={{
                        textAlign: "center",
                        margin: "26px 0",
                      }}
                    >
                      LINEAR REGRESSION
                    </h2>
                  </th>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Parameters</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>values</span>
                    </p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>Definition</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="3">
                    <p>
                      <span>Solver</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>11 - L2-regularized L2-loss SVR primal</span>
                    </p>
                  </td>
                  <td colSpan="3" rowSpan="3">
                    <p>
                      <span>
                        We have 3 linear Regression solvers, by combining
                        several types of loss functions and regularization
                        schemes. The regularization
                      </span>
                    </p>
                    <p>
                      <span>
                        can be L1 or L2, and the losses can be the regular
                        L2-loss for SVM (hinge loss), or L1-loss for SVM. The
                        default value for type is 11
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>12 - L2-regularized L2-loss SVR dual</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>13 - L2-regularized L1-loss SVR dual</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Cost (C)</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        The parameter C, trades off misclassification of
                        training examples against simplicity of the decision
                        surface. A low C makes the decision surface smooth,
                        while a high C aims at classifying all training examples
                        correctly. As C increases, tendency to misclassification
                        decreases on train data( may lead to overfitting).
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Epsilon_SVR (P)</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        Epsilon in the epsilon-SVR model. It specifies the
                        epsilon-tube within which no penalty is associated in
                        the training loss function with points predicted within
                        a distance epsilon from the actual value.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Termination Criterion</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        Tolerance for stopping criterion. The stopping tolerance
                        affects the number of iterations used when optimizing
                        the model.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Folds</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        V-fold for Cross Validation. In v-fold cross-validation,
                        we first divide the training set into v subsets of equal
                        size. Sequentially one subset is tested using the
                        classifier trained on the remaining v − 1 subsets. Thus,
                        each instance of the whole training set is predicted
                        once so the cross-validation accuracy is the percentage
                        of data which are correctly classified
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <th colSpan="5" rowSpan="1">
                    <h2
                      style={{
                        textAlign: "center",
                        margin: "26px 0",
                      }}
                    >
                      LINEAR CLASSIFICATION
                    </h2>
                  </th>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Parameters</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>values</span>
                    </p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>Definition</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="3">
                    <p>
                      <span>Solver</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>
                        0 - L2-regularized logistic regression primal,
                      </span>
                    </p>
                    <p>
                      <span>1 - L2-regularized L2-loss SVC dual,</span>
                    </p>
                    <p>
                      <span>2 - L2-regularized L2-loss SVC primal ,</span>
                    </p>
                    <p>
                      <span>3 - L2-regularized L1-loss SVC dual,</span>
                    </p>
                  </td>
                  <td colSpan="3" rowSpan="3">
                    <p>
                      <span>
                        We have 8 linear Classification solvers, by combining
                        several types of loss functions and regularization
                        schemes. The regularization
                      </span>
                    </p>
                    <p>
                      <span>
                        can be L1 or L2, and the losses can be the regular
                        L2-loss for SVM (hinge loss), L1-loss for SVM, or the
                        logistic loss for logistic regression. The default value
                        for type is 0
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>
                        4 - Support Vector Classification by Crammer and Singer
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>5 - L1-regularized L2-loss SVC</span>
                    </p>
                    <p>
                      <span>6 - L1-regularized Logistic regression ,</span>
                    </p>
                    <p>
                      <span>7 - L2-regularized Logistic regression dual</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Cost (C)</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        Regularization parameter. The strength of the
                        regularization is inversely proportional to C. Must be
                        strictly positive. The penalty is a squared l2 penalty.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Bias</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        Conside : w_1 * x_1 + w_2 * x_2 + w_3 * x_3 + … + w_bias
                        * x_bias = 0, Here x are the feature values and w are
                        the trained “weights”. The additional feature x_bias is
                        a constant, whose value is equal to the bias.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Termination Criterion</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        Tolerance for stopping criterion. The stopping tolerance
                        affects the number of iterations used when optimizing
                        the model.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Folds</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        V-fold for Cross Validation. In v-fold cross-validation,
                        we first divide the training set into v subsets of equal
                        size. Sequentially one subset is tested using the
                        classifier trained on the remaining v − 1 subsets. Thus,
                        each instance of the whole training set is predicted
                        once so the cross-validation accuracy is the percentage
                        of data which are correctly classified.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>nr_weight</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        nr_weight is the number of elements in the array
                        weight_label and weight. Each weight[i] corresponds to
                        weight_label[i], meaning that the penalty of className
                        weight_label[i] is scaled by a factor of weight[i].
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Weight (wi)</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        set the parameter C of className i to weight*C, for
                        C-SVC.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Weight_Label</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        These weights are used to change the penalty for
                        specific labels (classes). If the weight for a label is
                        not changed, it is set to 1.0.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <th colSpan="5" rowSpan="1">
                    <h2
                      style={{
                        textAlign: "center",
                        margin: "26px 0",
                      }}
                    >
                      K-MEANS
                    </h2>
                  </th>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Parameters</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>values</span>
                    </p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>Definition</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Kernel Type</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>0. LINEAR</span>
                    </p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>linear: u&apos;*v</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>1. POLYNOMIAL</span>
                    </p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>polynomial: (gamma*u&apos;*v + coef0)^degree</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>2. RBF</span>
                    </p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>radial basis function: exp(-gamma*|u-v|^2)</span>
                    </p>
                    <p>
                      <span>
                        This kernel nonlinearly maps samples into a higher
                        dimensional space so it, unlike the linear kernel, can
                        handle the case when the relation between className
                        labels and attributes is nonlinear.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>3. SIGMOID</span>
                    </p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>sigmoid: tanh(gamma*u&apos;*v + coef0)</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Gamma</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        gamma defines how much influence a single training
                        example has. The larger gamma is, the closer other
                        examples must be to be affected.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Coef0</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        Degree of the polynomial kernel function. Ignored by all
                        other kernels.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Degree</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        Independent term in kernel function. It is only
                        significant in &apos;polynomial&apos; and
                        &apos;sigmoid&apos;.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Dimension (Number of Attributes)</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        Number of input attributes / columns in the training
                        data set
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Number of Centers</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>Number of clusters</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Stopping Criteria</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        Tolerance for stopping criterion. The stopping tolerance
                        affects the number of iterations used when optimizing
                        the model.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Number of Rows</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        Total number of records / rows in the training data
                      </span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  return {
    props: { helpGuideSidebar: true },
  };
}
