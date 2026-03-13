<p>${ message } </p>
    `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}